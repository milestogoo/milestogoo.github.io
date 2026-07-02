import { useContent } from '../context/ContentContext'
import Editable from './Editable'

export default function Projects() {
  const { content, editMode } = useContent()
  const guardClick = (e) => editMode && e.preventDefault()
  const projects = content.projects
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const indexOf = (p) => projects.indexOf(p)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-semibold text-gray-900">Featured Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {featured.map((project) => {
          const i = indexOf(project)
          return (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              onClick={guardClick}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className={`h-28 bg-gradient-to-br ${project.gradient}`} />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">
                  <Editable path={`projects.${i}.title`} />
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  <Editable path={`projects.${i}.description`} />
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <li key={j} className="rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700">
                      <Editable path={`projects.${i}.tags.${j}`} />
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-block text-sm font-medium text-purple-700">
                  View project →
                </span>
              </div>
            </a>
          )
        })}
      </div>

      <h3 className="mt-14 text-center text-xl font-semibold text-gray-900">More Projects</h3>
      <ul className="mx-auto mt-6 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
        {rest.map((project) => {
          const i = indexOf(project)
          return (
            <li key={project.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={guardClick}
                  className="font-medium text-gray-900 hover:text-purple-700"
                >
                  <Editable path={`projects.${i}.title`} />
                </a>
                <p className="mt-1 text-sm text-gray-600">
                  <Editable path={`projects.${i}.description`} />
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-1.5 sm:justify-end">
                {project.tags.map((tag, j) => (
                  <span key={j} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                    <Editable path={`projects.${i}.tags.${j}`} />
                  </span>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
