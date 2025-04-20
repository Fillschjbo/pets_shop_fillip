import{r as u}from"./read-77xOQEu6.js";import{h as g}from"./header-gShiXjEk.js";const r=document.querySelector(".postContainer"),a=document.createElement("div");a.className="pagination flex justify-center gap-4 mt-6";r.after(a);async function c(e=1,s="created",n="desc"){const o=await u(25,e,s,n);if(!o){alert("Failed to load posts");return}const l=o.data,{meta:i}=o;r.innerHTML=l.map(t=>`
            <a class="listing-card font-primary text-[#1C2541] hover:cursor-pointer group" data-id="${t.id}">
                <div class="w-[348px] h-[262px] overflow-hidden rounded-[20px]">
                     <img src=${t.image.url} alt=${t.image.alt}, class="w-[348px] h-[262px] rounded-[20px] object-cover transition-transform duration-300 group-hover:scale-105">
                </div>
                <div class="flex pt-[10px] gap-[4px]">
                         <img src="/assets/icons/Location.svg" alt="Location icon">  
                         <p class="text-[12px] text-[#787E8E]">${t.location}</p>
                     </div>
                <h2 class="pt-[16px] font-extrabold text-[24px]">${t.name}, ${t.age}</h2>
                <ul class="text-[#787E8E] text-[12px] pt-[18px] flex flex-col gap-[12px]">
                    <li class="flex gap-[4px]">
                        <img src="/assets/icons/Pets.svg" alt="Gender Icon">
                        <p>${t.breed}</p>
                    </li>
                    <li class="flex gap-[4px]">
                        <img src="/assets/icons/Gender.svg" alt="Gender Icon">
                        <p>${t.gender}</p>
                    </li>
                    <li class="flex gap-[4px]">
                        <img src="/assets/icons/Ruler.svg" alt="Size Icon">
                        <p>${t.size}</p>
                    </li>
                </ul>
            </a>
        `).join(""),document.querySelectorAll(".listing-card").forEach(t=>{const x=t.getAttribute("data-id");t.addEventListener("click",()=>{localStorage.setItem("listingId",x),window.location.href="/listing/"})}),a.innerHTML=`
        <button class="prev-page bg-gray-200 px-4 py-2 rounded disabled:opacity-50" ${e===1?"disabled":""}>Previous</button>
            <span class="page-info">Page ${e} of ${i.pageCount||"1"}</span>
            <button class="next-page bg-gray-200 px-4 py-2 rounded disabled:opacity-50" ${e>=(i.pageCount||1)?"disabled":""}>Next</button>
    `;const p=a.querySelector(".prev-page"),d=a.querySelector(".next-page");p.addEventListener("click",()=>{e>1&&c(e-1,s,n)}),d.addEventListener("click",()=>{e<i.pageCount,c(e+1,s,n)})}c();g();
