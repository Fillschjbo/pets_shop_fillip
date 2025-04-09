const c="https://v2.api.noroff.dev/",i=`${c}pets`;function p(){return{method:"GET",headers:{"Content-Type":"application/json"}}}async function d(o=25,n=1,a=null,t="desc"){const r=new URL(i);r.searchParams.append("limit",o),r.searchParams.append("page",n),a&&(r.searchParams.append("sort",a),r.searchParams.append("sortOrder",t));try{const e=await fetch(r.toString(),p());if(!e.ok)throw new Error(`error fetching post: ${e.statusText}`);const s=await e.json();return console.log(s),s}catch(e){console.error("Error:",e.message)}}const l=document.querySelector(".postContainer");async function u(o=1,n="created",a="desc"){const t=await d(25,o,n,a);if(!t){alert("Failed to load posts");return}const r=t.data;l.innerHTML=r.map(e=>`
            <div>
                <div>
                     <img src=${e.image.url} alt=${e.image.alt}, class="w-[348px] h-[262px] rounded-[20px] object-cover">
                     <p>${e.location}</p>
                </div>
                <h2>${e.name}, ${e.age}</h2>
                <ul>
                    <li>${e.breed}</li>
                    <li>${e.gender}</li>
                    <li>${e.size}</li>
                </ul>
            </div>
        `).join("")}u();
