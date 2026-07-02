export function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj)
}

export function setByPath(obj, path, value) {
  const keys = path.split('.')
  const last = keys.pop()
  const target = keys.reduce((acc, key) => acc[key], obj)
  target[last] = value
}

export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}
