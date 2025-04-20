const i="7c5e4be3-e45e-4b27-98b8-076dd2b13f1a",t="https://v2.api.noroff.dev/",s=`${t}pets`,c=`${t}auth/register`,u=`${t}auth/login`;function a(){localStorage.removeItem("token"),localStorage.removeItem("user"),document.location.reload()}const o=document.querySelector(".login-btn"),n=document.querySelector(".menu"),r=document.querySelector(".fixed");function d(){localStorage.getItem("token")?(o.innerHTML=`
            <a href="/listing/create/index.html" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Post pet</a>
            <a class="logout font-primary text-[#FDFDFD] font-bold text-[24px] hover:cursor-pointer">Logout</a>
            `,n.innerHTML=`
            <li><a href="/listing/create/index.html" class="font-primary text-[#FDFDFD] font-bold text-[1rem]">Post pet</a></li>
            <li><a class="logout font-primary text-[#FDFDFD] font-bold text-[1rem] hover:cursor-pointer">Logout</a></li>
            `):(o.innerHTML=`
            <a href="/auth/login/index.html" class="font-primary text-[#FDFDFD] font-bold text-[24px]">Login</a>
        `,n.innerHTML=`
            <li><a href="/auth/login/index.html" class="font-primary text-[#FDFDFD] font-bold text-[1rem]">Login</a></li>
            `)}const l=document.querySelector("button");l.addEventListener("click",()=>{r.classList.toggle("scale-y-100"),r.classList.toggle("scale-y-0")});document.addEventListener("click",e=>{e.target.classList.contains("logout")&&a()});export{u as A,c as a,s as b,i as c,d as h};
