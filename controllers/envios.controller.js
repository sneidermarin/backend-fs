import db from '../config/db.js' // Asegúrate de que esta línea esté activa

export const registrarOrden = async (req, res) => {
  try {
    const { cliente, direccion, ciudad, estado, fecha_entrega, trabajador_id } = req.body

    const sql = `
      INSERT INTO ordenes_envio (cliente, direccion, ciudad, estado, fecha_entrega, trabajador_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `

    const [resultado] = await db.query(sql, [
      cliente,
      direccion,
      ciudad,
      estado,
      fecha_entrega,
      trabajador_id || null // Inserta NULL si no se envía
    ])

    res.status(200).json({
      mensaje: 'Orden registrada correctamente',
      orden_id: resultado.insertId // Muy útil si necesitas mostrar o redirigir
    })
  } catch (error) {
    console.error('Error al registrar orden:', error.message) // Más claro el log
    res.status(500).json({ mensaje: 'Error al registrar orden', error: error.message })
  }
}
