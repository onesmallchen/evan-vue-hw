const STORAGE_NAME = "auo-list"

const getLists = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveLists = (lists) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(lists))
}

const getList = (id) => {
  const lists = getLists()
  return lists.find((list) => list.id == id)
}

export { getLists, saveLists, getList }
