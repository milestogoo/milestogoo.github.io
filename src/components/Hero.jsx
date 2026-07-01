import { profile } from '../data/portfolio'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-20 text-center">
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-indigo-600 text-3xl font-semibold text-white">
        {initials}
      </div>
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        {profile.role}
      </p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-gray-100">
        {profile.name}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        {profile.tagline}
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">{profile.location}</p>

      <div className="mt-6 flex justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900"
          >
            {social.label.slice(0, 2)}
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#experience"
          className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
