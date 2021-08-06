export class Services{
    

    async deleteStudent(data){
        const student = await fetch("backend/deleteStudent.php", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return student.json()
    }

    async updateStudent(data){
        const student = await fetch("backend/updateStudent.php", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return student.json()
    }
    async addingStudent(formD){
        const student = await fetch("backend/addStudent.php", {
            method: "POST",
            body: formD
        })
        return student.json()
    }
    async getCourse(){
        const course = await fetch("backend/getAulas.php")
        return course.json()
    }
    async getStudents(){
        const student = await fetch("backend/getAllStudent.php")
        return student.json()
    }
}