import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Get in touch</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Best way to reach me is email, or find me on the links below.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          {profile.email}
        </a>
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  )
}
