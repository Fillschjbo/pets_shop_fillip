import {logoutFunction} from "./logout.js";



const headerLogin = document.querySelector(".login-btn");
const mobileMenu = document.querySelector(".menu")
const mobileMenuDropdown = document.querySelector(".fixed");

export function header() {
        const token = localStorage.getItem("token");
        if (token) {
            headerLogin.innerHTML =`
            <a href="/listing/create/" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Post pet</a>
            <a class="logout font-primary text-[#FDFDFD] font-bold text-[24px] hover:cursor-pointer">Logout</a>
            `;

            mobileMenu.innerHTML = `
            <li><a href="/listing/create/" class="font-primary text-[#FDFDFD] font-bold text-[1rem]">Post pet</a></li>
            <li><a class="logout font-primary text-[#FDFDFD] font-bold text-[1rem] hover:cursor-pointer">Logout</a></li>
            `;

        } else {
            headerLogin.innerHTML = `
            <a href="/auth/login/" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Login</a>
        `;
            mobileMenu.innerHTML = `
            <li><a href="/auth/login/" class="font-primary text-[#FDFDFD] font-bold text-[1rem]">Login</a></li>
            `;
        }
}

const mobileMenuButton = document.querySelector("button");
mobileMenuButton.addEventListener("click", () => {
    mobileMenuDropdown.classList.toggle("scale-y-100");
    mobileMenuDropdown.classList.toggle("scale-y-0");
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("logout")) {
        logoutFunction();
    }
});

