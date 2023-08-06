import { connection } from '../db.js'

export const getBooks = async (req, res) => {

  const [rows] = await connection.query("SELECT * FROM libros");
  res.json(rows)

}

export const addBooks = async (req, res) => {
 
 const {nombre, autor, precio} = req.body
 const [rows] = await connection.query("INSERT INTO libros(nombre, autor, precio) VALUES(?, ?, ?)", 
 [nombre, autor, precio]
  );


}

export const updateBooks = async (req, res) => {

const {id} = req.params
const {nombre, autor, precio} = req.body
const [result] = await connection.query("UPDATE libros SET nombre = ?, autor = ?, precio = ? WHERE id = ?", [nombre, autor, precio, id])
}

export const deleteBooks = async (req, res) => {

const [result] = await connection.query("DELETE FROM libros WHERE id = ?", [req.params.id])

}