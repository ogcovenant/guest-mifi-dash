const storeData = (key: string, value: any) => {
  localStorage.setItem(key, value)
}

const getStoredData = (key: string) => {
  const value = localStorage.getItem(key)
  return value;  
}


const deleteData = (key: string) => {
  localStorage.removeItem(key)
}

export {
  storeData,
  getStoredData,
  deleteData
}