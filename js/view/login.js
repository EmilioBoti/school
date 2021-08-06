import { logicLogin } from "../controllers/loginLogic.js"
import { mainContainer } from "../index.js"

export const loginPage = ()=>{

    //mainContainer.innerHTML = ""
    const pageLog = `
    <div class="login-container" id="login-container">
        <div class="login-box" id="login-box">
            <h3 class="title-login">Login with your account</h3>
            <span class="error" id="error">error</span>
            <form action="" class="form-login" id="form-login">
                <div class="form-login-item">
                    <label for="name">Email</label>
                    <input type="email" name="email" class="input-field" id="email" placeholder="you@example.com">
                </div>
                <div class="form-login-item">
                    <label for="name">Password</label>
                    <input type="password" name="password" class="input-field" id="password"  placeholder="password">
                </div>
                <small class="goSignUp">Don't have any account? <span id="goSignup">Sign up</span></small>
                <input type="button" value="Sign in" class="btn" id="btn-login">
            </form>
        </div>
    </div>
    `
    mainContainer.innerHTML = pageLog
    logicLogin()
    // return pageLog
}