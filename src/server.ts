import cors from 'cors';
import dotenv from 'dotenv';
import express from "express"
import { routes } from '../src/routes/sendEmail.routes'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})