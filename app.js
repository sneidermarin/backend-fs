// app.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import orderRoutes from './routes/orderRoutes.js'
import enviosRoutes from './routes/envios.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/ordenes', orderRoutes)

app.use('/api', enviosRoutes)

app.get('/', (req, res) => {
  res.send('Fast Solutions API funcionando 🚀')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`)
})
