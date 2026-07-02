import { useContent } from '../context/ContentContext'
import Editable from './Editable'

export default function Experience() {
  const { content } = useContent()

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-semibold text-gray-900">Experience</h2>
      <ol className="relative mt-10 border-l-2 border-purple-200">
        {content.experience.map((job, i) => (
          <li key={job.company} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-purple-600 shadow" />
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                <Editable path={`experience.${i}.role`} />
              </h3>
              <p className="text-sm font-medium text-purple-700">
                <Editable path={`experience.${i}.company`} />
              </p>
              <p className="text-sm text-gray-500">
                <Editable path={`experience.${i}.period`} />
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-gray-600">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>
                    <Editable path={`experience.${i}.bullets.${j}`} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
