import { loginPage } from "./view/login.js"
import { system } from "./view/system.js"
import { signUp  } from "./view/signUp.js"

import { mainContainer  } from "./index.js"

export function router(page){    
    mainContainer.innerHTML = ""
    switch(page){
        case "#home":
            loginPage()
            break;
        case "#manage":
            system()
            break;
        case "#signup":
            signUp()
            break;
    }
}