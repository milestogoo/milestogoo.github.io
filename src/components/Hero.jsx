import { useRef } from 'react'
import { Mail, IdCard, GraduationCap, FileDown, Camera } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { useContent } from '../context/ContentContext'
import Editable from './Editable'

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-gray-900">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
        <Icon size={18} strokeWidth={2} />
      </span>
      {children}
    </h2>
  )
}

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
      className="bg-gradient-to-br from-purple-100 via-white to-emerald-50 px-6 py-16"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[280px_1fr]">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="relative h-32 w-32">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt={profile.name}
                className="h-32 w-32 rounded-full object-cover shadow-lg ring-4 ring-white"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-purple-600 text-3xl font-semibold text-white shadow-lg ring-4 ring-white">
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
                  <Camera size={16} />
                </button>
              </>
            )}
          </div>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-gray-900">
            <Editable path="profile.name" />
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            <Editable path="profile.location" />
          </p>
          <p className="mt-3 font-serif text-lg font-semibold text-purple-700">
            <Editable path="profile.role" />
          </p>
          {profile.company && (
            <p className="text-sm text-gray-500">
              <Editable path="profile.company" />
            </p>
          )}

          <div className="mt-5 flex gap-2">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:shadow-md"
            >
              <Mail size={16} />
            </a>
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.label]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:shadow-md"
                >
                  {Icon ? <Icon size={16} /> : social.label.slice(0, 2)}
                </a>
              )
            })}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <SectionHeading icon={IdCard}>Professional Summary</SectionHeading>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700">
              <Editable path="profile.bio" as="span" />
            </p>
            <a
              href={resumeUrl}
              download
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-105"
            >
              <FileDown size={16} />
              Download CV
            </a>
          </div>

          <div>
            <SectionHeading icon={GraduationCap}>Education</SectionHeading>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {education.map((item, i) => (
                <div
                  key={item.degree}
                  className="rounded-xl bg-gradient-to-br from-white to-emerald-50/60 p-4 shadow-sm"
                >
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <GraduationCap size={16} />
                  </span>
                  <p className="font-serif text-sm font-semibold text-gray-900">
                    <Editable path={`education.${i}.degree`} />
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    <Editable path={`education.${i}.period`} />
                  </p>
                  <p className="text-xs text-gray-600">
                    <Editable path={`education.${i}.school`} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading icon={IdCard}>Interests</SectionHeading>
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
