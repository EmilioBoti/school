import { box1, box2 } from "../index.js"
import { templeofUser } from "../view/forms.js"

function getStudent(flag){
    
    const num1 = 1
    const num2 = 2
    
    if(flag === num1 )
         box1.innerHTML = "<h3>Lista de Alumnos</h3>"
    if(flag === num2)
        box2.innerHTML = "<h3>Lista de Alumnos</h3>"

    const reqSt = new XMLHttpRequest()
    reqSt.onreadystatechange = getAllStudent
    reqSt.open("GET", "http://localhost/studies/backend/getAllStudent.php")
    reqSt.send()

    function getAllStudent(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            const form = document.createElement("div")
            form.innerHTML = `<h3>Lista de Profesores</h3>`
            console.log(obj)
            if(flag === num1){
                obj.forEach(e => {  box1.innerHTML += templeofUser(e)  })
            }
            if(flag === num2 ){ 
                obj.forEach(e => {  box2.innerHTML += templeofUser(e)  })
            }
        }
    }
}
export { getStudent }