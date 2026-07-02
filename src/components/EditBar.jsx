import { useContent } from '../context/ContentContext'

export default function EditBar() {
  const { editMode, dirty, publish, publishState, publishError } = useContent()

  if (!editMode) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-4 border-t border-purple-200 bg-white/95 px-6 py-3 shadow-lg backdrop-blur">
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-purple-700">Edit mode</span> — click any text to
        change it, or the camera icon on the photo. Changes are local until you publish.
      </p>
      <div className="flex items-center gap-3">
        {publishState === 'error' && (
          <span className="text-sm text-red-600">{publishError}</span>
        )}
        {publishState === 'success' && (
          <span className="text-sm text-emerald-600">Published — live in ~2 minutes.</span>
        )}
        <button
          onClick={publish}
          disabled={!dirty || publishState === 'publishing'}
          className="rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {publishState === 'publishing' ? 'Publishing…' : 'Publish changes'}
        </button>
      </div>
    </div>
  )
}
