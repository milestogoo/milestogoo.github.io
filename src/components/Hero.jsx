import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        {profile.role}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-gray-100">
        {profile.name}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        {profile.tagline}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
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
