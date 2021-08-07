import { mainContainer, active } from "../index.js"
import { Services } from "../service/services.js"
import { form } from "../view/forms.js"

export const system = ()=>{

    const head = `
        <header>
            <nav class="navBar" id="navbar">
                <p class="point active" data-n = "student"  id="student">Gestión de Alumnos</p>
                <p class="point" data-n = "uf" id="uf">Gestión de UF</p>
                <p class="point" data-n = "teacher" id="teacher">Gestión de Profesores</p>
                <p class="point" data-n = "score" id="evaluation">Evaluaciones</p>
            </nav>
        </header>
        <section class = "system-container" id = "system-container"></section>
    `
    mainContainer.innerHTML = head

    const navBar = document.getElementById("navbar")
    const systemContainer = document.getElementById("system-container")
    student(systemContainer)

    const studen = document.getElementById("student")
    const uf = document.getElementById("uf")
    const teacher = document.getElementById("teacher")
    const evaluation = document.getElementById("evalution")
    
    navBar.addEventListener("click", (e)=>{
        const nav = e.target
        if(nav !== undefined){
            routerSystem(systemContainer,nav)
        }
    })
} 
function routerSystem(systemContainer, page, obj){

    systemContainer.innerHTML = ""

    switch(page.dataset.n || page.dataset.edit){
        case "student":
            active(1)
            student(systemContainer)
        break; 
        case "uf":
            active(2)
            systemContainer.innerHTML = "UF Page"
        break; 
        case "teacher":
            active(3)
            systemContainer.innerHTML = "Teacher Page"
        break; 
        case "score":
            active(4)
            systemContainer.innerHTML = "Score Page"
        break; 
        case "edit":
            editStudent(systemContainer, obj)
        break; 
    }
}
function student(systemContainer){

    const service = new Services()
    const obj = JSON.parse(localStorage.getItem("user"))
    console.log(obj)

    systemContainer.innerHTML = form("alumno")
    const formulary = document.getElementById("form")

    const course = document.getElementById("course")
    
    service.getCourse().then((courses)=>{
        courses.forEach( e => {
            const option = document.createElement("option")
            option.value = e.id
            option.innerText = e.name
            course.append(option)            
        });
    })
    
    const studentContainer = document.getElementById("student-collect")
    gettingStudent(service, studentContainer, systemContainer)

    formulary.addEventListener("submit", (e)=>{
        const formD = new FormData(formulary)
        e.preventDefault()

        service.addingStudent(formD)
            .then(data =>{
                //console.log(data)
                gettingStudent(service, studentContainer,systemContainer)
            })
    })
}
function gettingStudent(service, studentContainer, systemContainer){

    studentContainer.innerHTML = ""
    service.getStudents().then((student) =>{
        student.forEach((e,i)=>{
            const st = `
            <div class="student">
                <div>
                    <p class="nameStudent">${e.name} ${e.firstlastname}</p>
                </div>
                <div class = "edit" id="edit-box">
                    <i class="fas fa-trash btn-edit" data-boxid = "${i}"  data-id = "${e.id}" data-edit="delete"></i>
                    <i class="far fa-edit btn-edit"  data-boxid = "${i}" data-id = "${e.id}" data-edit="edit"></i>
                </div>
            </div>`
            studentContainer.innerHTML += st 
        })
        const objStudent = [];
        const edition = document.getElementById("student-collect")
        const collectStudent = document.querySelectorAll(".student")

        collectStudent.forEach(e => objStudent.push(e))
        console.log(objStudent[0])

        edition.addEventListener("click", (e)=>{
            if(e.target.dataset.edit){
                if(e.target.dataset.edit === "edit"){
                    routerSystem(systemContainer, e.target, student[e.target.dataset.boxid])
                }
                if(e.target.dataset.edit === "delete"){
                    console.log(e.target.dataset.id)
                    console.log(e.target.dataset.boxid)
                    const data = { "id": e.target.dataset.id }
                    
                    edition.removeChild(collectStudent[e.target.dataset.boxid])
                    service.deleteStudent(data).then(data => console.log(data))
                }
            }
        })
    })
}
function editStudent(systemContainer, obj){

    systemContainer.innerHTML = formStudent(obj)
    
    const service = new Services()
    const course = document.getElementById("course")
    
    service.getCourse().then((courses)=>{
        courses.forEach( e => {
            const option = document.createElement("option")
            option.value = e.id
            option.innerText = e.name
            course.append(option)            
        });
    })

    const btnSend = document.getElementById("send")
    btnSend.addEventListener("click", ()=>{
        const form = document.getElementById("form")
        const d = new FormData(form)

        const dataStudent = {
            "id": obj.id,
            "name": d.get("name"),
            "firstlastname": d.get("firstlastname"),
            "secondlastname": d.get("secondlastname"),
            "email": d.get("email"),
            "course": d.get("course")
        }
        service.updateStudent(dataStudent).then(data=> console.log(data))
    })
}

function  formStudent(obj){  
    const  studentForm  = `
    <section class="student-container">
        <form  method="POST" name="form" enctype="multipart/form-data" id="form" class="form-student">
            <h2 id="title">Edit Student</h2>
            <div class="form-login-item">
                <label for="name">Name</label>
                <input type="text" class="input-field" id="name" name="name" value ="${obj.name}" placeholder="Name" required >
            </div>
            <div class="form-login-item">
                <label for="firstlastname">Fisrt Lastname</label>
                <input type="text" class="input-field" id="firstlastname" name="firstlastname" value ="${obj.firstlastname}" placeholder="Primer Apellido" required >
            </div>
            <div class="form-login-item">
                <label for="secondlastname">Second Lastname</label>
                <input type="text" class="input-field" id="secondlastname" name="secondlastname" value ="${obj.secondlastname}" placeholder="Segundo Apellido" required >
            </div>
            <div class="form-login-item">
                <label for="email">Email</label>
                <input type="email" class="input-field" id="mail" name="email" value ="${obj.email}" placeholder="Email" required >
            </div>
            <select id="course" class="select" name = "course"></select>
            <div class="form-login-item">
                <input type="button" value="Alta" id="send" class="btn">
            </div>
        </form>           
    </section>
    `
    return studentForm
}