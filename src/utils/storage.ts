export const storeData = (key: string, value: any) => {
  localStorage.setItem(key, value)
}

export const getStoredData = (key: string) => {
  const value = localStorage.getItem(key)
  return value;  
}


export const deleteData = (key: string) => {
  localStorage.removeItem(key)
}