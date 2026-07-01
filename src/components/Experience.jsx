import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Experience</h2>
      <ol className="relative mt-8 border-l border-gray-200 dark:border-gray-800">
        {experience.map((job) => (
          <li key={job.role + job.company} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-indigo-500 dark:border-gray-950" />
            <h3 className="font-medium text-gray-900 dark:text-gray-100">{job.role}</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{job.period}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-gray-600 dark:text-gray-400">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
