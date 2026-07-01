import { profile, interests, education } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">About</h2>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">{profile.bio}</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
              Interests
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
              Education
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{item.degree}</p>
                  <p>{item.school}</p>
                  <p className="text-gray-500 dark:text-gray-500">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
