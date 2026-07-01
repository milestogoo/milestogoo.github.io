import { projects } from '../data/portfolio'

const featured = projects.filter((p) => p.featured)
const rest = projects.filter((p) => !p.featured)

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-semibold text-gray-900">Featured Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {featured.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className={`h-28 bg-gradient-to-br ${project.gradient}`} />
            <div className="p-5">
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-block text-sm font-medium text-purple-700">
                View project →
              </span>
            </div>
          </a>
        ))}
      </div>

      <h3 className="mt-14 text-center text-xl font-semibold text-gray-900">More Projects</h3>
      <ul className="mx-auto mt-6 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
        {rest.map((project) => (
          <li key={project.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gray-900 hover:text-purple-700"
              >
                {project.title}
              </a>
              <p className="mt-1 text-sm text-gray-600">{project.description}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-1.5 sm:justify-end">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
