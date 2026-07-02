import { useContent } from '../context/ContentContext'
import Editable from './Editable'

export default function Articles() {
  const { content, editMode } = useContent()
  const guardClick = (e) => editMode && e.preventDefault()

  return (
    <section id="articles" className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center font-serif text-2xl font-bold text-gray-900">Articles</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {content.articles.map((article, i) => {
            const imgSrc =
              article.imageVersion > 0
                ? `${import.meta.env.BASE_URL}articles/${article.id}.jpg?v=${article.imageVersion}`
                : null
            return (
              <div
                key={article.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {imgSrc ? (
                  <img src={imgSrc} alt="" className="h-40 w-full object-cover" />
                ) : (
                  <div className={`h-40 bg-gradient-to-br ${article.gradient}`} />
                )}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700"
                      >
                        <Editable path={`articles.${i}.tags.${j}`} />
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-gray-900">
                    <Editable path={`articles.${i}.title`} />
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    <Editable path={`articles.${i}.excerpt`} />
                  </p>
                  <p className="mt-3 text-xs text-gray-500">
                    <Editable path={`articles.${i}.date`} as="span" /> ·{' '}
                    <Editable path={`articles.${i}.readTime`} as="span" />
                  </p>
                  <a
                    href={`#/article/${article.id}`}
                    onClick={guardClick}
                    className="mt-3 inline-block text-sm font-medium text-purple-700 hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
