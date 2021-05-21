const assignament = ()=>{
    
    const div = document.createElement("div")  
    div.classList.add("assignment")
    div.innerHTML =  `
        <div class="u-box">
            <h3>UF sin asignar</h3>
            <div class="uf-box" id="unassigned-box"></div>
        </div>
        <div class="u-box">
            <h3>Asignar a<small id="assignTo"></small></h3>
            <div class="uf-box" id="assign-box"></div>
        </div>
        <div class="col-auto">
            <input type="button" class="btn btn-primary mb-3" id="btnAsignar" value="Asignar"/ >
        </div>
    `
    return div
}
export {  assignament }