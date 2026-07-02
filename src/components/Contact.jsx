import { useContent } from '../context/ContentContext'
import Editable from './Editable'

export default function Contact() {
  const { content, editMode } = useContent()
  const { profile } = content
  const guardClick = (e) => editMode && e.preventDefault()

  return (
    <section id="contact" className="bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Let's build something great together</h2>
        <p className="mx-auto mt-3 max-w-md text-purple-100">
          Open to conversations on engineering leadership, digital transformation, or the side
          projects above. Best way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            onClick={guardClick}
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-purple-700 shadow-sm hover:bg-purple-50"
          >
            <Editable path="profile.email" />
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/60 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
