import { useContent } from '../context/ContentContext'
import Editable from './Editable'

export default function Skills() {
  const { content } = useContent()

  return (
    <section id="skills" className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-gray-900">Skills</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {content.skillGroups.map((group, i) => (
            <div key={group.category} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-700">
                <Editable path={`skillGroups.${i}.category`} />
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                  >
                    <Editable path={`skillGroups.${i}.items.${j}`} />
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
