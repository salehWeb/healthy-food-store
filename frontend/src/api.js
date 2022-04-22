import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000/'})

export const getCard = () => API.get('/')
export const getCartWith_ID = (data) => API.get('/about', data)
export const PostData = (form) => API.post('/', form)