import express from 'express';
import fs from 'fs'

const path = './students.json'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Prueba de GET sin path')
})

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

//**********POST/students, leyendo la base de datos students.json y agregando un nuevo estudiante *******************************

app.post('/students', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Error al leer la base de datos' });
        }
        let students = JSON.parse(data);
        const newStudent = { id: (students.length) > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1, ...req.body };
        students.push(newStudent);

    fs.writeFile(path, JSON.stringify(students, null, 2), (error) => {
        if (error) {
            return res.status(500).json({ error: 'Error al guardar el estudiante' });
            }
        res.send({
            status: 201,
            message: 'Student created successfully',
            data: newStudent
        });
    });
    });
});

//********PUT/students/:id, leyendo la base de datos students.json, filtrando por id y actualizando el estudiante ******************************/


app.put('/students/:id', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Error al leer la base de datos' });
            }
        
        let students = JSON.parse(data); 
        const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
        
        if (studentIndex === -1) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        
        students[studentIndex] = { id: parseInt(req.params.id), ...req.body };
        
        fs.writeFile(path, JSON.stringify(students, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el estudiante' });
            }
        res.send({
            status: 200,
             message: 'Student updated successfully',
            data: students[studentIndex] });
            });
        });
    });
    

// **********DELETE/students/:id, leyendo la base de datos students.json, filtrando por id y borrando el estudiante **************/

app.delete('/students/:id', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Error al leer la base de datos' });
        }
    const students = JSON.parse(data);
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
});

//****************************************************************************************************************************

app.listen(3002, () => {
    console.log('Server is running on port 3002')
    })
