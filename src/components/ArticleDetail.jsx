import { useRef } from 'react'
import { Camera } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import Editable from './Editable'

export default function ArticleDetail({ id }) {
  const { content, editMode, getImagePreview, pickImage } = useContent()
  const index = content.articles.findIndex((a) => a.id === id)
  const article = content.articles[index]
  const fileInputRef = useRef(null)

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-gray-600">Article not found.</p>
        <a href="#articles" className="mt-4 inline-block text-purple-700 hover:underline">
          ← Back to Articles
        </a>
      </div>
    )
  }

  const imgKey = `article:${article.id}`
  const imgSrc =
    getImagePreview(imgKey) ||
    (article.imageVersion > 0
      ? `${import.meta.env.BASE_URL}articles/${article.id}.jpg?v=${article.imageVersion}`
      : null)

  const initials = content.profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <a href="#articles" className="text-sm text-purple-700 hover:underline">
        ← Back to Articles
      </a>

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag, j) => (
          <span
            key={j}
            className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-purple-700"
          >
            <Editable path={`articles.${index}.tags.${j}`} />
          </span>
        ))}
      </div>

      <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
        <Editable path={`articles.${index}.title`} />
      </h1>
      <p className="mt-3 text-sm text-gray-500">
        {content.profile.name} · <Editable path={`articles.${index}.date`} as="span" /> ·{' '}
        <Editable path={`articles.${index}.readTime`} as="span" />
      </p>

      <div className="relative mt-8">
        {imgSrc ? (
          <img src={imgSrc} alt="" className="h-72 w-full rounded-lg object-cover" />
        ) : (
          <div className={`h-72 w-full rounded-lg bg-gradient-to-br ${article.gradient}`} />
        )}
        {editMode && (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files[0] && pickImage(imgKey, e.target.files[0])}
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-purple-700 px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-purple-600"
            >
              <Camera size={14} /> Change image
            </button>
          </>
        )}
      </div>

      <div className="mt-10 grid gap-2 border-t border-gray-200 pt-8 sm:grid-cols-[140px_1fr]">
        <h2 className="font-serif text-lg font-semibold text-gray-900">Summary</h2>
        <p className="text-sm leading-relaxed text-gray-700">
          <Editable path={`articles.${index}.body`} as="span" />
        </p>
      </div>

      <div className="mt-10 flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
          {initials}
        </div>
        <div>
          <p className="font-serif font-semibold text-gray-900">{content.profile.name}</p>
          <p className="text-sm text-purple-700">{content.profile.role}</p>
          <p className="mt-2 text-sm text-gray-600">{content.profile.bio}</p>
        </div>
      </div>
    </article>
  )
}
