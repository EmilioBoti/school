import { loginPage } from "./view/login.js"
import { router } from "./router.js"

// import { header } from "./view/header.js"
// import {  manageStudent  } from "./controllers/manageStudent.js"
// import {  manageUf } from "./controllers/manageUf.js"
// import {  manageTeacher  } from "./controllers/manageTeacher.js"
// import { manageEvaluation } from "./controllers/manageEvaluation.js"

export const mainContainer = document.getElementById("main-container")
loginPage()

window.addEventListener("hashchange", ()=>{
  const location = window.location.hash
  router(location)
})


/**************old version***************/
//console.log(formData.getAll(name))

// const assignamentContainer = document.getElementById("assignamentUf")
// const box1 = document.getElementById("first-box")
// const box2 = document.getElementById("second-box")

// manageStudent()

// const student = document.getElementById("student")
// student.addEventListener("click", ()=>{
//   active(1)
//   manageStudent()
// })
// const uf = document.getElementById("uf")
// uf.addEventListener("click", ()=>{
//   active(2)
//   manageUf()  
// })
// const teacher = document.getElementById("teacher")
// teacher.addEventListener("click", ()=>{
//   active(3)
//   manageTeacher ()  
// })
// const evaluation = document.getElementById("evaluation")
// evaluation.addEventListener("click", ()=>{
//   active(4)
//   manageEvaluation()
// })

export function active(status){

  if(student.classList.contains("active")) student.classList.remove("active")
  if(uf.classList.contains("active")) uf.classList.remove("active")
  if(teacher.classList.contains("active")) teacher.classList.remove("active")
  if(evaluation.classList.contains("active")) evaluation.classList.remove("active")
  
  if(status === 1 )
    student.classList.add("active")
  if(status === 2 )
    uf.classList.add("active")
  if(status === 3 )
    teacher.classList.add("active")
  if(status === 4 )
    evaluation.classList.add("active")
}
// export { assignamentContainer, box2, box1 }