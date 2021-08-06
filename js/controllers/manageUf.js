import {  assignamentContainer,box2, box1 } from "../index.js"
import { templeofUf, formUf } from "../view/forms.js"

function manageUf(){

    box2.innerHTML = ""
    assignamentContainer.innerHTML = ""
    box1.innerHTML = formUf()
    box2.innerHTML = getUfAll()

    const formulary = document.getElementById("formUf")
    formulary.addEventListener("submit", (e)=>{
        e.preventDefault()

        const f = new FormData(formulary)
        const reqAddUf = new XMLHttpRequest()

        reqAddUf.onreadystatechange = addUf
        reqAddUf.open("POST", "../../backend/uf/addUf.php")
        reqAddUf.send(f)

        function addUf(){
            if(this.readyState === 4 && this.status === 200){
                const obj = JSON.parse(this.responseText)
               
                if(obj !== null)  matriculate() 
                box2.innerHTML = getUfAll()
            }
        }
    })
}

function getUfAll(){

    const reqGetUf = new XMLHttpRequest()

    reqGetUf.onreadystatechange = getUf
    reqGetUf.open("GET", "../../backend/uf/getAllUf.php")
    reqGetUf.send()

    function getUf(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            const div = document.createElement("div")
            div.innerHTML ="<h3>Lista de UFs</h3>"
            box2.append(div)

            obj.forEach(e  =>  box2.innerHTML += templeofUf(e) )
        }
    }
}

function matriculate(){

    //matriculamos a los Alumnos
    const req = new XMLHttpRequest()
    req.onreadystatechange = matriculateStudent
    req.open("GET", "../../backend/matriculate.php")
    req.send()
    
    function matriculateStudent(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            console.log(obj)
        }   
    }
}
export { manageUf, getUfAll }