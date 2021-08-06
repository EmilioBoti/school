import { logicSignup } from "../controllers/logicSignup.js"
import { mainContainer } from "../index.js"

export const signUp = ()=>{

    //mainContainer.innerHTML = ""

    const homeSignUp = `
    <div class="login-container" id="login-container">
        <div class="login-box" id="login-box">
            <h3 class="title-login">Create your free account</h3>
            <span class="error" id="error">error</span>
            <form action="" class="form-login" id="form-signup">
                <div class="form-login-item">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="input-field" id="name"  placeholder="Example Example">
                </div>
                <div class="form-login-item">
                    <label for="firtlastname">First lastname</label>
                    <input type="text" name="firstlastname" class="input-field" id="firstlastname"  placeholder="example example">
                </div>
                <div class="form-login-item">
                    <label for="secondlastname">Second lastname</label>
                    <input type="text" name="secondlastname" class="input-field" id="secondlastname"  placeholder="example example">
                </div>
                <div class="form-login-item">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="input-field" id="emailSingUp"  placeholder="you@example.com">
                </div>
                <div class="form-login-item">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="input-field" id="passwordSignUp" placeholder="password">
                </div>
                <div class="form-login-item">
                    <label for="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" class="input-field" id="confirmPass"  placeholder="password">
                </div>
                <small class="goSignUp">Already have an account? <span id="goSignin">Sign in</span></small>
                <input type="submit" value="Create Account" class="btn" id="btn-create">
            </form>
        </div>
    </div>    
    `
    mainContainer.innerHTML = homeSignUp
    logicSignup()
    // return homeSignUp
}