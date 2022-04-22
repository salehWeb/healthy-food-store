import express from 'express'
import { getCard, PostData, getOneCard } from '../controles/home.js'
const route = express.Router()

route.get('/', getCard)
route.get('/about', getOneCard)
route.post('/', PostData)

export default route