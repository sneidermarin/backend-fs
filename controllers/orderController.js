import { getAllOrders } from '../models/orderModel.js'

export const listarOrdenes = (req, res) => {
  getAllOrders((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las órdenes' })
    }
    res.json(results)
  })
}
