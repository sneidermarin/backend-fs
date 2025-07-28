import express from 'express'
import { registrarOrden } from '../controllers/envios.controller.js'

const router = express.Router()

router.post('/ordenes', registrarOrden)

export default router
