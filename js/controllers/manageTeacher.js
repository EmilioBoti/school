import { box1, box2 } from "../index.js"
import { form, templeofUf } from "../view/forms.js"
import { getTeachers } from "../controllers/getTeachers.js"
import { assignament } from "../view/formUF.js"


const manageTeacher = ()=>{
        
    getTeachers() //cargamos el listado de profesores
    loadUassignedUf()//cargamos las UF no asignadas

    box1.innerHTML = form("Profesor")
    const div = assignament()
    box1.append(div)
    
    let codeT
    const idUf = []

    //cargamos las UFs del profesor 
    box2.addEventListener("click", (e)=>{
        codeT = e.target.dataset.code
        
        if(codeT !== undefined){
            
            const assignTo = document.getElementById("assignTo")
            assignTo.classList.add("assignTo")
            assignTo.innerHTML = e.target.value
            assign.innerHTML = ""

            const reqGetUf = new XMLHttpRequest()
            reqGetUf.onreadystatechange = getUfStudent
            reqGetUf.open("POST", "http://localhost/studies/backend/ufTeacher.php")
            reqGetUf.setRequestHeader("Content-Type", "application/json")
            reqGetUf.send(JSON.stringify({"code": codeT}))
    
            function getUfStudent(){
                if(this.readyState === 4 && this.status === 200){
                    const obj = JSON.parse(this.responseText)
                    obj.forEach(e => { 
                        assign.innerHTML += templeofUf(e)
                        loadUassignedUf() 
                    })
                }
            }
        }
    })
    const assign = document.getElementById("assign-box")
    //añadimos UF seleccionada a las uf del profesor
    const unassigned = document.getElementById("unassigned-box")
    unassigned.addEventListener("click", (e)=>{
        let code = e.target

        if(code.dataset.id)
             assign.appendChild(code)

        if(!idUf.includes(code)){
             idUf.push(Number(code.dataset.id)
        )}
    })
    
    //añadimos UF profesores en la base de datos
    const btnAsignar = document.getElementById("btnAsignar")
    btnAsignar.addEventListener("click", ()=>{
        
        const obj = {
            "teacherId": codeT,
            "ufs_id": idUf
        }
        
        const req = new XMLHttpRequest()

        req.onreadystatechange = sendData
        req.open("POST", "http://localhost/studies/backend/uf/assignUf.php/")
        req.setRequestHeader("Content-Type", "application/json")
        req.send(JSON.stringify(obj))  
        
        function sendData(){
            if(this.readyState === 4 && this.status === 200){
                const obj = JSON.parse(this.responseText)
                alert(obj.message)
                getTeachers()
            }
        }
    })
    //añadir profesores
    const f = document.getElementById("form")
    f.addEventListener("submit", (e)=>{
        e.preventDefault()
        
        const ft = new FormData(f)
        const req = new XMLHttpRequest()

        req.onreadystatechange = addingStudent
        req.open("POST", "http://localhost/studies/backend/addTeacher.php")
        req.send(ft)

        function addingStudent(){
            if(this.readyState === 4 && this.status === 200){
                const obj = JSON.parse(this.responseText)
                getTeachers()
            }
        }
    })

    //Cargar UF no asignadas 
    function loadUassignedUf(){

        const reqUf = new XMLHttpRequest()
        reqUf.onreadystatechange = ufUnassigned
        reqUf.open("GET", "http://localhost/studies/backend/uf/ufUnassigned.php")
        reqUf.send()

        function ufUnassigned(){
            if(this.readyState === 4 && this.status === 200){
                const obj = JSON.parse(this.responseText)
                unassigned.innerHTML = ""
                obj.forEach(e => {
                    unassigned.innerHTML += templeofUf(e)
                })
            }
        }
    } 
}
export { manageTeacher }