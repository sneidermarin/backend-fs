import db from '../config/db.js'

export const getAllOrders = (callback) => {
  db.query('SELECT * FROM orden_envio', callback)
}
