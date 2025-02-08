import express from 'express';
import fs from 'fs'

const path = './students.json'

// *******************Array de estudiantes (quemado)********************************************

// const students = [
//     { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
//     { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
//     { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
// ];

//***********************************************************************************************
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Prueba de GET sin path')
})

// *******GET/students, trabajando directamente con el array de estudiantes (quemado) sin leer la base de datos********

//app.get('/students', (req, res) => {
    // res.json(students)
    //res.send({
      //  status: 200,
       // message: 'Students fetched successfully',
      //  data: students
   // })
//})


// GET/students, leyendo la base de datos students.json (trayendo el archivo de estudiantes) *******************************

app.get('/students', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Error al leer la base de datos' });
        }
        res.send({
            status:200, 
            message: 'Students fetched successfully', 
            data: JSON.parse(data)}),
    });
});

//*******GET/students/:id, trabajando directamente con el array de estudiantes (quemado) sin leer la base de datos*******

// app.get('/students/:id', (req, res) => {
//     const studentId = req.params.id
//     const selectedStudent = students.find( (student) =>student.id === parseInt(studentId))
//     console.log("1)",studentId)
//     console.log("2)",selectedStudent)
//     if(!selectedStudent){
//         return res.status(404).send({
//             status: 404,
//             message: 'Student not found'
//         })
//     }
//     res.send({
//         status: 200,
//         message: 'Student fetched successfully',
//         data: selectedStudent
//     })
// })

//**************GET/students/:id, leyendo la base de datos students.json y filtrando por id ****************************

app.get('/students/:id', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Error al leer la base de datos' });
        }
        const students = JSON.parse(data);
        const studentId = req.params.id
        const selectedStudent = students.find( (student) =>student.id === parseInt(studentId))
        if(!selectedStudent){
            return res.status(404).send({
                status: 404,
                message: 'Student not found'
            })
        }
        res.send({
            status: 200,
            message: 'Student fetched successfully',
            data: selectedStudent
        })
    });
});

// **********DELETE/students/:id, leyendo la base de datos students.json, filtrando por id y borrando el estudiante **************/

app.delete('/students/:id', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Error al leer la base de datos' });
        }
    let students = JSON.parse(data);
    const studentId = req.params.id
    const studentExist = students.some((student) => student.id === parseInt(studentId))
    if(!studentExist){
        return res.status(404).send({
            status: 404,
            message: 'Student not found'
        })
    }
    const deleteStudent = students.filter((student) => student.id !== parseInt(studentId))
    fs.writeFile(path, JSON.stringify(deleteStudent, null, 2), (err) => {
       if (err) {
            return res.status(500).json({ error: 'Error al eliminar el estudiante' });
        }       
    })
    res.send({
        status: 200,
        message: 'Student deleted successfully'
    })
})
});

//****************************************************************************************************************************

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})


