import axios from "axios"
import { getStoredData } from "./storage"


const token = getStoredData("token")

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default api