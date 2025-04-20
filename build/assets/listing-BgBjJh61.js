import{a}from"./read-77xOQEu6.js";import{b as i,c as l,h as d}from"./header-gShiXjEk.js";async function c(){const t=localStorage.getItem("listingId");if(!t){alert("No postId found");return}try{return await fetch(`${i}/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":l}})}catch(e){console.error("error updating post: ",e)}}async function p(t){confirm("are you sure you want to delete this post?")&&(await c()?(window.location.href="/",alert("Deleted post")):alert("Failed to delete post."))}const x=document.querySelector(".listingContainer");async function m(){try{const t=await a();if(!t){alert("could not fetch data");return}const e=t.data;if(x.innerHTML=`
        <div class="md:pr-[9vw] pt-16 md:h-screen">
            <img src=${e.image.url} alt=${e.image.alt||"image"} class="md:w-[43vw] w-[80vw] h-[554px] object-cover rounded-[20px]">
            <p class="font-primary text-[1rem] text-[#1C2541 pt-[32px]">${e.description}</p>
            <div id="owner-buttons" class="mt-4"></div>
        </div>
        <div class="w-[80vw] md:w-[40vw] flex flex-col items-start md:items-center">
        <div class="md:w-[350px]">
            <h2 class="font-primary font-bold text-[3rem] md:text-[4rem]">${e.name}, ${e.age}</h2>
            <ul>
                <li class="adoptionStatus">
                 ${e.adoptionStatus.toLowerCase()==="available"?`<div class="bg-[#BCFFBB] h-[18px] w-[111px] flex items-center rounded-[5px] px-[3px] gap-[0.5rem]">
                        <div class="w-[16px] h-[16px] rounded-2xl bg-[#E4FFE3] flex items-center justify-center"><div class="w-[10px] h-[10px] rounded-2xl bg-[#00BF40]"></div></div>
                        <p class="font-primary text-[1rem] text-[#00BF40] font-bold">Available</p>
                    </div>`:`<div class="bg-[#FDFBB0] h-[18px] w-[111px] flex items-center rounded-[5px] px-[3px] gap-[0.5rem]">
                        <div class="w-[16px] h-[16px] rounded-2xl bg-[#FEFEE7] flex items-center justify-center"><div class="w-[10px] h-[10px] rounded-2xl bg-[#EBD510]"></div></div>
                        <p class="font-primary text-[1rem] text-[#EBD510] font-bold">Pending</p>
                    </div>`}
                </li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Location.svg" alt="location"> ${e.location}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/species.svg" alt="species"> ${e.species}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Pets.svg" alt="breed"> ${e.breed}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Gender.svg" alt="gender"> ${e.gender}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Ruler.svg" alt="ruler"> ${e.size}</li>
            </ul>
        </div>
           
            <button class="md:w-[350px] w-full h-[51px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[20px] mt-[24px] md:mt-[200px]">Adopt</button>
            <div class="md:w-[350px] w-full flex flex-col justify-center items-center shadow-md rounded-[20px] mt-[115px] p-[0.5rem]">
                <div class="flex items-center justify-center gap-[25px]">
                    <img src=${e.owner.avatar.url} alt=${e.owner.avatar.alt} class="w-[73px] h-[73px] rounded-[50px]">
                    <div>
                        <h3>Caretaker</h3>
                        <p>${e.owner.name}</p>
                      </div>
                </div>
                <button class="w-[313px] h-[51px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[20px] mt-[38px]">Message</button>
            </div>
        </div>
        `,localStorage.getItem("user")===e.owner.name){const r=document.getElementById("owner-buttons"),s=document.createElement("button");s.textContent="Edit post",s.className="w-[150px] h-[40px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[10px] mr-2";const o=document.createElement("button");o.textContent="Delete post",o.className="w-[150px] h-[40px] bg-[#ff4d4d] hover:bg-[#ff6666] text-white rounded-[10px]",s.addEventListener("click",()=>{const n=e.id;localStorage.setItem("listingId",n),window.location.href="/listing/edit/"}),o.addEventListener("click",()=>{const n=e.id;localStorage.setItem("listingId",n),p()}),r.appendChild(s),r.appendChild(o)}}catch(t){console.error(t)}}m();d();
