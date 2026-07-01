import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-200 p-5 transition hover:border-indigo-300 hover:shadow-sm dark:border-gray-800 dark:hover:border-indigo-700"
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}
