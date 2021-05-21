// import { box1, box2 } from "../index.js"

const form = (name)=>{

    const  stForm  = `
        <form  method="POST" name="form" id="form" class="grid-items">
            <h3 id="title">Registrar ${name}</h3>
            <div class="grid-items-form">
                <input type="text" class="fields" id="name" name="name" placeholder="Name" required >
            </div>
            <div class="grid-items-form">
                <input type="text" class="fields" id="lastname1" name="lastname1" placeholder="Primer Apellido" required >
            </div>
            <div class="grid-items-form">
                <input type="text" class="fields" id="lastname2" name="lastname2" placeholder="Segundo Apellido" required >
            </div>
            <div id = "aulas"></div>
            <div class="grid-items-form">
                <input type="submit" value="Alta" id="send" class="send">
            </div>
        </form>
    ` 
    return stForm
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