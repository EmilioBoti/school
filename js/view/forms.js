// import { box1, box2 } from "../index.js"

const form = (name)=>{

    const  studentForm  = `
    <section class="student-container">
        <form  method="POST" name="form" enctype="multipart/form-data" id="form" class="form-student">
            <h2 id="title">Registrar ${name}</h2>
            <div class="form-login-item">
                <label for="name">Name</label>
                <input type="text" class="input-field" id="name" name="name" placeholder="Name" required >
            </div>
            <div class="form-login-item">
                <label for="lastname1">Fisrt Lastname</label>
                <input type="text" class="input-field" id="lastname1" name="lastname1" placeholder="Primer Apellido" required >
            </div>
            <div class="form-login-item">
                <label for="lastname2">Second Lastname</label>
                <input type="text" class="input-field" id="lastname2" name="lastname2" placeholder="Segundo Apellido" required >
            </div>
            <div class="form-login-item">
                <label for="email">Email</label>
                <input type="email" class="input-field" id="mail" name="email" placeholder="Email" required >
            </div>
            <select id="course" class="select" name = "course">
                <option value="0">Course</option>
            </select>
            <div class="form-login-item">
                <input type="submit" value="Alta" id="send" class="btn">
            </div>
        </form>
        <div class="showStudent">
            <h3>Student Register</h3>
            <div class="student-collect" id="student-collect"></div>
        </div>            
    </section>
    ` 
    return studentForm
}
const formUf = ()=>{
    const form =  `
        <form class="row g-3" id="formUf">
            <div class="col-auto">
                <label for="staticEmail2" class="col-auto visually-hidden">Título de la UF</label>
            </div>
            <div class="col-auto">
                <input type="text" name ="title" class="form-control" id="inputPassword2" placeholder="UF" required>
            </div>
            <div class="col-auto">
                <button type="submit" name ="submit"class="btn btn-primary mb-3">Añadir UF</button>
            </div>
        </form>
    `
    return form
}

const templeofUser = (obj)=>{
    const user =  `<p class ="names" data-code=${obj.id}>${obj.name} ${obj.lastname1} (${obj.aulaId})</p>`
    return user
}

const templeofUf = (obj)=>{
    const user =  `<p class ="names" data-id=${obj.id}>${obj.title}</p>`
    return user
}

export { form, templeofUser, templeofUf, formUf}