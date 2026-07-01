import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
