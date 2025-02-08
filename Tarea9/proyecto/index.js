import express from 'express';
import { createStudentFunction, deleteStudentFunction, getStudentByIdFunction, getStudentsFunction, helloWordFunction, updateStudentFunction } from './funciones/index.js';

const app = express()

// habilita la propiedad res.body en todos los endpoints
app.use(express.json())

// midleware de logs 
const logsMiddleware = (req, res, next) => {
    console.log(`Request method: ${req.method} and URL: ${req.url}`)
    next()
}
const validateBody = (req, res, next) => {
    const {  name, age, major } = req.body
    console.log(req.body)
    if(!req.body ||!name || !age || !major) return res.status(400).send({ message: 'Body is required' })
    next()
}

app.use(logsMiddleware)

// GET, POST, PUT, DELET

app.get('/', helloWordFunction)
app.get('/students', getStudentsFunction)
app.get('/students/:id', getStudentByIdFunction)
app.post('/students', validateBody, createStudentFunction)
app.put('/students/:id',  updateStudentFunction)
app.delete('/students/:id', deleteStudentFunction)

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})