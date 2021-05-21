import { box1, box2 } from "../index.js"

    
function ufStudent(codeSt){

    const ob = { "code": codeSt }
    const req = new XMLHttpRequest()
        
    req.onreadystatechange = getUfStudent
    req.open("POST", `http://localhost/studies/backend/uf/ufStudent.php/`)
    req.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    req.send(JSON.stringify(ob))

    function getUfStudent(){
        if(this.readyState === 4 && this.status === 200){
            const obj = JSON.parse(this.responseText)
            box1.innerHTML = updateScore()
            
            const uf = document.getElementById("uf-student")
            const u = document.getElementById("score")
            const dataStudent = document.getElementById("data-student")
            
            dataStudent.innerHTML = `
                <h6>Nombre: ${obj[0].stname}</h6>
                <p>Apellido: ${obj[0].lname}</p>
            `
            obj.forEach(e => {
                uf.innerHTML += `<p>${e.title}<span>(${e.tname})</span></p>` 
                u.innerHTML += `
                    <div class="u">
                        <input type="number" name="" id="" value="0">
                    </div>
                `
            })
        }   
    }
}   

function updateScore(){

    const boardScore = `
    <form class="cont" id="form-Score">
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
        <input type="button" id="btn-score" value="Update">
    </form>
    `
    return boardScore
}
export { ufStudent, updateScore }