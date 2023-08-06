import { Router } from 'express'
import { getBooks, addBooks, updateBooks, deleteBooks } from '../controllers/libroscontrollers.js'


const router = Router()

router.get('/libros', getBooks)
router.post('/agregarlibros', addBooks)
router.put('/actualizarlibros/:id', updateBooks)
router.delete('/eliminarlibros/:id', deleteBooks)

export default router