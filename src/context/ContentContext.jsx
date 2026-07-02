import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getByPath, setByPath, deepClone } from '../lib/pathUtils'
import { publishContent, publishAvatar } from '../lib/githubPublish'
import defaultContent from '../data/content.json'

const Ctx = createContext(null)

const PAT_STORAGE_KEY = 'portfolio_gh_pat'

export function ContentProvider({ children }) {
  const editMode = useMemo(
    () => new URLSearchParams(window.location.search).get('edit') === '1',
    [],
  )

  const [content, setContent] = useState(defaultContent)
  const [dirty, setDirty] = useState(false)
  const [avatarFile, setAvatarFile] = useState(null) // { base64, previewUrl }
  const [publishState, setPublishState] = useState('idle') // idle | publishing | success | error
  const [publishError, setPublishError] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content.json`, { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setContent(data)
      })
      .catch(() => {})
  }, [])

  function updateField(path, value) {
    setContent((prev) => {
      const next = deepClone(prev)
      setByPath(next, path, value)
      return next
    })
    setDirty(true)
  }

  function pickAvatarFile(file) {
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result
      const base64 = dataUrl.split(',')[1]
      setAvatarFile({ base64, previewUrl: dataUrl })
      setDirty(true)
    }
    reader.readAsDataURL(file)
  }

  function getToken() {
    let token = localStorage.getItem(PAT_STORAGE_KEY)
    if (!token) {
      token = window.prompt(
        'Enter a GitHub personal access token with write access to this repo (contents: read/write). It is stored only in this browser and never leaves it except to call the GitHub API directly.',
      )
      if (token) localStorage.setItem(PAT_STORAGE_KEY, token.trim())
    }
    return token ? token.trim() : null
  }

  async function publish() {
    const token = getToken()
    if (!token) return
    setPublishState('publishing')
    setPublishError('')
    try {
      const next = deepClone(content)
      if (avatarFile) {
        await publishAvatar(avatarFile.base64, token)
        next.profile.avatarVersion = (next.profile.avatarVersion || 0) + 1
      }
      await publishContent(next, token)
      setContent(next)
      setAvatarFile(null)
      setDirty(false)
      setPublishState('success')
    } catch (err) {
      setPublishError(err.message || 'Publish failed')
      setPublishState('error')
    }
  }

  function getValue(path) {
    return getByPath(content, path)
  }

  const value = {
    content,
    editMode,
    dirty,
    updateField,
    getValue,
    avatarFile,
    pickAvatarFile,
    publish,
    publishState,
    publishError,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useContent() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}
