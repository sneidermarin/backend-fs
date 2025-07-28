// routes/orderRoutes.js
import express from 'express'
import pool from '../config/db.js'
const router = express.Router()

router.post('/', async (req, res) => {
  const { cliente_nombre, direccion_entrega, estado, fecha_entrega, observaciones } = req.body;

  try {
    await pool.query(
      'INSERT INTO ordenes_envio (cliente_nombre, direccion_entrega, estado, fecha_entrega, observaciones) VALUES (?, ?, ?, ?, ?)',
      [cliente_nombre, direccion_entrega, estado, fecha_entrega, observaciones]
    );
    res.json({ mensaje: 'Orden registrada correctamente' });
  } catch (error) {
    console.error('Error al registrar orden:', error.message);
    res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
  }
});

export default router;
