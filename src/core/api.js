import axios from 'axios'

export const API_URL = `http://www.recipepuppy.com/api/`

export const API = axios.create({
  baseURL: API_URL
})