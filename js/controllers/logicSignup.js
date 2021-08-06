export function logicSignup(){
    const formSignup = document.getElementById("form-signup")
    
    console.log(error)

    const goSignin = document.getElementById("goSignin")
    goSignin.addEventListener("click", ()=>{
        window.location.hash = "#home"
    })

    formSignup.addEventListener("submit", (e)=>{
        const formData = new FormData(formSignup)
        // const name = formData.get("name")        
        // const flastname = formData.get("firstlastname")        
        // const slastname = formData.get("secondlastname")        
        const pass = formData.get("password")        
        const confirmPass = formData.get("confirmPass")        
        e.preventDefault()

        // console.log(name , flastname, slastname ,pass, confirmPass)
        
        if(pass === confirmPass){
            toSignUp(formData).then((user) =>{
                if(user !== null){
                    console.log(user)
                }else{
                    callError("e")
                    console.error("Password or Email incorrect.")
                }
            })
        }else{
           callError("Passwrods don't match each other.")
        }
    })

    async function toSignUp(formData){
        const dataUser = await fetch("backend/signup/signup.php", {
            method: "POST",
            body: formData
        })
        return dataUser.json()
    }
}
 export function callError(err){
    const error = document.querySelector("#error")
    error.textContent = err
    error.style.visibility = "visible"
    setTimeout(()=>{
        error.style.visibility = "hidden"
    },3000)
}