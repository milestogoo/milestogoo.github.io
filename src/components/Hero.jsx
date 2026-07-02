import { useRef } from 'react'
import { useContent } from '../context/ContentContext'
import Editable from './Editable'

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

export default function Hero() {
  const { content, editMode, avatarFile, pickAvatarFile } = useContent()
  const { profile, interests, education } = content
  const fileInputRef = useRef(null)

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  const avatarSrc =
    avatarFile?.previewUrl ||
    (profile.avatarVersion > 0
      ? `${import.meta.env.BASE_URL}avatar.jpg?v=${profile.avatarVersion}`
      : null)

  return (
    <section
      id="top"
      className="bg-gradient-to-br from-violet-200 via-purple-100 to-emerald-100 px-6 py-16"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[280px_1fr]">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="relative h-28 w-28">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt={profile.name}
                className="h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-white"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-purple-600 text-3xl font-semibold text-white shadow-lg ring-4 ring-white">
                {initials}
              </div>
            )}
            {editMode && (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files[0] && pickAvatarFile(e.target.files[0])}
                />
                <button
                  onClick={() => fileInputRef.current.click()}
                  aria-label="Change photo"
                  className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white shadow ring-2 ring-white hover:bg-purple-600"
                >
                  📷
                </button>
              </>
            )}
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            <Editable path="profile.name" />
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            <Editable path="profile.location" />
          </p>
          <p className="mt-2 text-sm font-medium text-purple-700">
            <Editable path="profile.role" />
          </p>

          <div className="mt-5 flex gap-2">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/70 text-gray-600 hover:bg-white"
            >
              ✉
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/70 text-xs font-semibold text-gray-600 hover:bg-white"
              >
                {social.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <span className="text-purple-600">◆</span> Professional Summary
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700">
              <Editable path="profile.bio" as="span" />
            </p>
            <a
              href={resumeUrl}
              download
              className="mt-4 inline-block rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-purple-500"
            >
              Download CV
            </a>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <span className="text-purple-600">◆</span> Education
            </h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {education.map((item, i) => (
                <div
                  key={item.degree}
                  className="rounded-lg border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    <Editable path={`education.${i}.degree`} />
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    <Editable path={`education.${i}.school`} />
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    <Editable path={`education.${i}.period`} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <span className="text-purple-600">◆</span> Interests
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((interest, i) => (
                <span
                  key={interest}
                  className="rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs font-medium text-purple-700"
                >
                  <Editable path={`interests.${i}`} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
