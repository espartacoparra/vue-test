const storageKey = 'theme'

export const setlocalStore = (data) => {
  localStorage.setItem(storageKey, JSON.stringify(data))
}

export const getLocalStore = () => {
  let data = localStorage.getItem(storageKey)
  if (!data) {
    return null
  }
  return JSON.parse(data)
}
