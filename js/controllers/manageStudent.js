import { assignamentContainer ,box1 } from "../index.js"
import { form } from "../view/forms.js"
import { getStudent } from "./getStudent.js"


function manageStudent(){
    
    getStudent(2)
    box1.innerHTML = form("Alumno")  
    box1.classList.remove("scrollBox")
    assignamentContainer.innerHTML = ""

    const aula = document.getElementById("aulas")
    const selectAulas = getAulas()
    aula.appendChild( selectAulas)

    //enviamos datos del estudiante
    const f = document.getElementById("form")
    f.addEventListener("submit", (e)=>{
        e.preventDefault()
        addStudent(f)
    })
}

function addStudent(f){
    
    const ft = new FormData(f)
    const reqAddSt = new XMLHttpRequest()

    reqAddSt.onreadystatechange = addingStudent
    reqAddSt.open("POST", "http://localhost/studies/backend/addStudent.php")
    reqAddSt.send(ft)

    function addingStudent(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            // console.log(obj)
            getStudent(2)
            if( obj !== null )
                addingUfs(obj)
        }
    }
}
function getAulas(){

    const reqAddSt = new XMLHttpRequest()

    reqAddSt.onreadystatechange = gettingAulas
    reqAddSt.open("GET", "http://localhost/studies/backend/getAulas.php")
    reqAddSt.send()
    const select = document.createElement("select")
    select.name = "aula"
    select.id = "aula"
    select.classList.add("select")
    
    function gettingAulas(){

        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            console.log(obj)

            obj.forEach(e => {
                const opt = document.createElement("option")
                opt.value = e.id
                opt.innerHTML = e.nombre
                select.appendChild(opt)
            })
        }

    }
    return select
}
function addingUfs(object){

    const reqAddSt = new XMLHttpRequest()

    reqAddSt.onreadystatechange = addingUf
    reqAddSt.open("POST", "http://localhost/studies/backend/addAllUfStudent.php")
    reqAddSt.setRequestHeader("Content-Type", "application/json")
    reqAddSt.send(JSON.stringify(object))

    function addingUf(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            console.log(obj)
        }
    }
}

export { manageStudent }