import { box1, box2 } from "../index.js"
import { templeofUser } from "../view/forms.js"

function getStudent(flag){
    
    const num1 = 1
    const num2 = 2
    
    // box1.innerHTML = ""
    // box2.innerHTML = ""
    
    // if(flag === num1 )
    //      box1.innerHTML = "<h3>Lista de Alumnos</h3>"
    // if(flag === num2)
    //     box2.innerHTML = "<h3>Lista de Alumnos</h3>"

    const reqSt = new XMLHttpRequest()
    reqSt.onreadystatechange = getAllStudent
    reqSt.open("GET", "../../backend/getAllStudent.php")
    reqSt.send()

    function getAllStudent(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            const div = document.createElement("div")
            
            // if(flag === num1){
            //     obj.forEach(e => { 
            //         div.innerHTML += templeofUser(e)
            //         box1.appendChild(div)
            //      })
            // }
            // if(flag === num2 ){ 
            //     obj.forEach(e => {
            //         div.innerHTML += templeofUser(e)
            //         box2.appendChild(div)
            //     })
            // }
        }
    }
}
export { getStudent }