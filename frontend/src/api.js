import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000/'})

export const getCard = () => API.get('/')
export const PostData = (form) => API.post('/', form)