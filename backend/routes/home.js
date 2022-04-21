import express from 'express'
import { getCard, PostData } from '../controles/home.js'
const route = express.Router()

route.get('/', getCard)
route.post('/', PostData)

export default route