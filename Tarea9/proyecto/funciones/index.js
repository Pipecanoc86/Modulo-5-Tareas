import { readFile, writeFile } from 'fs/promises';

let students = await readFile('./students.json')
students= JSON.parse(students)

export const helloWordFunction = (req, res) => {
    res.send('Hello World')
}
export const getStudentsFunction = async (req, res) => {

    res.send({
        status: 200,
        message: 'students fetched successfully',
        data: students
    })

}

export const getStudentByIdFunction = (req, res) => {
    const studentId = req.params.id
    const selectedStudent = students.find( (student) =>student.id === parseInt(studentId) )
    if(!selectedStudent){
        return res.status(404).send({
            status: 404,
            message: 'student not found'
        })
    }
    res.send({
        status: 200,
        message: 'Student fetched successfully',
        data: selectedStudent
    })
}

export const createStudentFunction = async (req, res) => {
    const newStudent = { id: (students.length) > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1, ...req.body };
    students.push(newStudent)
    await writeFile('./students.json', JSON.stringify(students))
    res.send({
        status: 201,
        message: 'Student added successfully',
        data: newStudent
    })
}

export const updateStudentFunction = async (req, res) => {
    const studentId = req.params.id
    const selectedStudent = students.findIndex((student) => student.id === parseInt(studentId))
    if(selectedStudent === -1){
        return res.status(404).send({
            status: 404,
            message: 'student not found'
        })
    }
    students[selectedStudent] = { id: parseInt(req.params.id), ...req.body };

    await writeFile('./students.json', JSON.stringify(students))
    res.send({
        status: 200,
        message: 'Student updated successfully',
        data: students[selectedStudent]
    })
}

export const deleteStudentFunction = async (req, res) => {
    const studentId = req.params.id
    
    const selectedStudent = students.findIndex((student) => student.id === parseInt(studentId))
    if(selectedStudent === -1){
        return res.status(404).send({
            status: 404,
            message: 'student not found'
        })
    }
    students.splice(selectedStudent, 1)
    await writeFile('./students.json', JSON.stringify(students))
    res.send({
        status: 200,
        message: 'student deleted successfully'
    })
}