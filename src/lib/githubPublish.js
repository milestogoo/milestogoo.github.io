const OWNER = 'milestogoo'
const REPO = 'milestogoo.github.io'
const BRANCH = 'main'
const API = `https://api.github.com/repos/${OWNER}/${REPO}`

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  bytes.forEach((b) => {
    binary += String.fromCharCode(b)
  })
  return btoa(binary)
}

async function getFileSha(path, token) {
  const res = await fetch(`${API}/contents/${path}?ref=${BRANCH}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
    },
  })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to read ${path} (${res.status})`)
  const data = await res.json()
  return data.sha
}

async function putFile(path, base64Content, message, token) {
  const sha = await getFileSha(path, token)
  const res = await fetch(`${API}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
    },
    body: JSON.stringify({
      message,
      content: base64Content,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.message || `Failed to publish ${path} (${res.status})`)
  }
  return res.json()
}

export async function publishContent(content, token) {
  const base64 = utf8ToBase64(JSON.stringify(content, null, 2))
  return putFile('public/content.json', base64, 'Update portfolio content via in-page editor', token)
}

export async function publishAvatar(base64ImageContent, token) {
  return putFile('public/avatar.jpg', base64ImageContent, 'Update portfolio photo via in-page editor', token)
}
