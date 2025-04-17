import {logoutFunction} from "./logout.js";

const headerLogin = document.querySelector(".login-btn");

export function header() {
        const token = localStorage.getItem("token");
        if (token) {
            headerLogin.innerHTML =`
            <a href="listing/create/" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Post pet</a>
            <a id="logout" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Logout</a>
            `;
                const logout = document.getElementById("logout");

                logout.addEventListener("click", ()=>{
                        logoutFunction();
                })
        } else {
            headerLogin.innerHTML = `
            <a href="auth/login/" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Login</a>
        `;
        }
}


