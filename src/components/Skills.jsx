import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Skills</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
