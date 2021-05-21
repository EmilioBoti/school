import { box1, box2 } from "../index.js"
// import { templeofUser } from "../view/forms.js"

function getTeachers(){
    box2.innerHTML = ""
    
    const reqT = new XMLHttpRequest()
    reqT.onreadystatechange = getAllTeachers
    reqT.open("GET", "http://localhost/studies/backend/getAllTeachers.php")
    reqT.send()

    function getAllTeachers(){
        if(this.readyState === 4 && this.status === 200){

            const obj = JSON.parse(this.responseText)
            
            // obj.forEach(e => { box2.innerHTML += radioButton(e) })
            //radioButton(obj)
            const form = document.createElement("form")
            form.innerHTML = `<h3>Lista de Profesores</h3>`
            obj.forEach(e => {
                const user =  `
                    <input type="radio" data-code=${e.id} class="nameT" name="nameTeacher" value="${e.name} ${e.lastname1}">
                    <label for="nameT">${e.name} ${e.lastname1}</label><br>
                    `  
                form.innerHTML += user
            })
            box2.append(form)
        }
    }
}

export { getTeachers }