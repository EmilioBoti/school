import { box1, box2 } from "../index.js"
import { getStudent } from "./getStudent.js"

function manageEvaluation(){
    
    box1.innerHTML = ""
    box2.innerHTML = ""
    let codeSt = 1;
    
    getStudent(1) //cargamos los Alumnos

    //Cargamos Los Datos del Alumno
    const boardScore = `
        <h3 class="subTitle">Evaluación</h3>
        <div class="data-student" id="data-student">
        </div>
        <div class="box-uf" id="box-uf">
            <div class="uf" id="uf-student">
                <h5>UF del Alumno</h5>     
            </div>
            <div class="box-notas" id="score">
                <h5>Notas</h5>
            </div>
        </div>
        <input type="submit" id="btn-score" class="send"  value="Actualizar">
    `
    const form = document.createElement("form")
    form.id = "formScore"
    form.method = "POST" 
    form.classList.add("cont")
    form.innerHTML = boardScore   
    box2.append(form)
    
    const uf = document.getElementById("uf-student")
    const u = document.getElementById("score")
    const dataStudent = document.getElementById("data-student")

    studentData(1) //Default evaluation

    //Enviamos los datos de la UF para actualizar las notas
    const f = document.getElementById("formScore")
    f.addEventListener("submit", (e)=>{
        
        e.preventDefault()
        const dataF = new FormData(f)
        const arrScore = dataF.getAll("score")

        let arrId = []

        const allUfs = document.querySelectorAll(".id_uf")
        allUfs.forEach((e)=>{ arrId.push(e.dataset.iduf) })
        console.log(arrId)
        
        const ob = {
            "values": arrScore,
            "codeSt": codeSt,
            "id_ufs": arrId
        }
        const http = new XMLHttpRequest()
        http.onreadystatechange = update
        http.open("POST", "http://localhost/studies/backend/updateScore.php")
        http.send(JSON.stringify(ob))

        function update(){
            if(this.readyState === 4 && this.status === 200){
                const obj = JSON.parse(this.responseText)
                alert(obj.message)
            }
        }
    })
    //carga el Alumno
    box1.addEventListener("click", (e)=>{
        codeSt = e.target.dataset.code
        if(codeSt !== undefined){
            uf.innerHTML = "<h5>UF del Alumno</h5>"
            u.innerHTML = "<h5>Notas</h5>"
            dataStudent.innerHTML = ""
            studentData(codeSt)
        } 
    })
    //enviamos los datos del Alumno que deseamos obtner
    function studentData(codeSt){
            
        const ob = {"code": codeSt }
        const requF = new XMLHttpRequest()

        requF.onreadystatechange = getUfStudent
        requF.open("POST", `http://localhost/studies/backend/uf/ufStudent.php/`)
        requF.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
        requF.send(JSON.stringify(ob))
    
        function getUfStudent(){
            if(this.readyState === 4 && this.status === 200){
                const obj = JSON.parse(this.responseText)
                
                if(obj === null ){
                    console.info("Any UF has not  been added.")
                }else{
                    dataStudent.innerHTML = `
                        <h6>Nombre: ${obj[0].stname}</h6>
                        <p>Apellido: ${obj[0].lname}</p>
                    `
                    obj.forEach(e => {
                        uf.innerHTML += `<p class="id_uf" data-iduf ="${e.id_uf}">${e.title}</p>` 
                        u.innerHTML += `
                            <div class="u">
                                <input type="text" name="score" class="score" value="${e.score}">
                            </div>
                        `
                    })
                }
            }   
        }
    }
}
export { manageEvaluation }