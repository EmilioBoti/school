import {  manageStudent  } from "./controllers/manageStudent.js"
import {  manageUf } from "./controllers/manageUf.js"
import {  manageTeacher  } from "./controllers/manageTeacher.js"
import { manageEvaluation } from "./controllers/manageEvaluation.js"


const container = document.getElementById("container")
const box1 = document.getElementById("first-box")
const box2 = document.getElementById("second-box")

manageStudent()

const student = document.getElementById("student")
student.addEventListener("click", ()=>{
   manageStudent()
})

const uf = document.getElementById("uf")
uf.addEventListener("click", ()=>{
  manageUf()  
})
const teacher = document.getElementById("teacher")
teacher.addEventListener("click", ()=>{
  manageTeacher ()  
})

const evaluation = document.getElementById("evaluation")
evaluation.addEventListener("click", ()=>{
  manageEvaluation()
})

// ufStudent()
export { container, box2, box1 }