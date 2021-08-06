import { callError } from "./logicSignup.js"  

export function logicLogin(){
    const loginForm = document.getElementById("form-login")
    const btnLogin = document.getElementById("btn-login")

    const goSignUp = document.getElementById("goSignup")

    goSignUp.addEventListener("click", (e)=>{
        const wind = e.view.window.location
        console.log(wind)
        window.location.hash = "#signup"
    })
    
    if(window.location.hash !== "#home"){
        window.location.hash = "#home"
    }

    btnLogin.addEventListener("click", ()=>{
        
        const formData = new FormData(loginForm)
        const password = formData.get('password')
        const email = formData.get('email')

        const user = {
            "email": email,
            "password": password
        }
        localStorage.setItem("user", JSON.stringify(user))
        // const obj = localStorage.getItem("user")
        // console.log(JSON.parse(obj))
        
        userData(user)
            .then((data)=>{
                if(data !== null){
                    window.location.hash = "#manage" 
                    //console.log(data)
                }else{
                    callError("Email or Password is incorrect.")
                    console.error("Password or Email incorrect.")
                }
            })
    })
    async function userData(user){
    
        const data = await fetch("backend/login/login.php", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        return data.json()
    }


}