import express from 'express'
import cors from 'cors'
import { connection } from './db.js'
import librosroutes from './routes/librosroutes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', librosroutes)

app.listen(3000)