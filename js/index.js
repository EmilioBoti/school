import { loginPage } from "./view/login.js"
import { router } from "./router.js"

export const mainContainer = document.getElementById("main-container")
loginPage()

window.addEventListener("hashchange", ()=>{
  const location = window.location.hash
  router(location)
})

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