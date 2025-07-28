// config/db.js
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,         // mejor si usas variables de entorno
  password: process.env.DB_PASSWORD,
  database: 'fast_solutions',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Opción: verificar conexión al arrancar (solo para debug)
try {
  const connection = await db.getConnection()
  console.log('✅ Conexión exitosa a MySQL')
  connection.release()
} catch (err) {
  console.error('❌ Error al conectar a MySQL:', err.message)
}

export default db
