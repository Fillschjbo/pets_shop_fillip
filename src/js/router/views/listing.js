import {readPost} from "../../api/listing/read.js";
import {onDeletePost} from "../../../../ui/listing/delete.js";
import {header} from "../../../../ui/global/header.js";

const listingContainer = document.querySelector(".listingContainer")

async function renderListing(){
    try{
        const data = await readPost()

        if(!data){
            alert("could not fetch data")
            return;
        }

        const listing = data.data;

        listingContainer.innerHTML =`
        <div class="md:pr-[9vw] pt-16 md:h-screen">
            <img src=${listing.image.url} alt=${listing.image.alt || "image"} class="md:w-[43vw] w-[80vw] h-[554px] object-cover rounded-[20px]">
            <p class="font-primary text-[1rem] text-[#1C2541 pt-[32px]">${listing.description}</p>
            <div id="owner-buttons" class="mt-4"></div>
        </div>
        <div class="w-[80vw] md:w-[40vw] flex flex-col items-start md:items-center">
        <div class="md:w-[350px]">
            <h2 class="font-primary font-bold text-[3rem] md:text-[4rem]">${listing.name}, ${listing.age}</h2>
            <ul>
                <li class="adoptionStatus">
                 ${listing.adoptionStatus.toLowerCase() === "available" ?
            `<div class="bg-[#BCFFBB] h-[18px] w-[111px] flex items-center rounded-[5px] px-[3px] gap-[0.5rem]">
                        <div class="w-[16px] h-[16px] rounded-2xl bg-[#E4FFE3] flex items-center justify-center"><div class="w-[10px] h-[10px] rounded-2xl bg-[#00BF40]"></div></div>
                        <p class="font-primary text-[1rem] text-[#00BF40] font-bold">Available</p>
                    </div>` :
            `<div class="bg-[#FDFBB0] h-[18px] w-[111px] flex items-center rounded-[5px] px-[3px] gap-[0.5rem]">
                        <div class="w-[16px] h-[16px] rounded-2xl bg-[#FEFEE7] flex items-center justify-center"><div class="w-[10px] h-[10px] rounded-2xl bg-[#EBD510]"></div></div>
                        <p class="font-primary text-[1rem] text-[#EBD510] font-bold">Pending</p>
                    </div>`}
                </li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Location.svg" alt="location"> ${listing.location}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/species.svg" alt="species"> ${listing.species}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Pets.svg" alt="breed"> ${listing.breed}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Gender.svg" alt="gender"> ${listing.gender}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem] flex gap-2"><img src="/assets/icons/Ruler.svg" alt="ruler"> ${listing.size}</li>
            </ul>
        </div>
           
            <button class="md:w-[350px] w-full h-[51px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[20px] mt-[24px] md:mt-[200px]">Adopt</button>
            <div class="md:w-[350px] w-full flex flex-col justify-center items-center shadow-md rounded-[20px] mt-[115px] p-[0.5rem]">
                <div class="flex items-center justify-center gap-[25px]">
                    <img src=${listing.owner.avatar.url} alt=${listing.owner.avatar.alt} class="w-[73px] h-[73px] rounded-[50px]">
                    <div>
                        <h3>Caretaker</h3>
                        <p>${listing.owner.name}</p>
                      </div>
                </div>
                <button class="w-[313px] h-[51px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[20px] mt-[38px]">Message</button>
            </div>
        </div>
        `;

        if (localStorage.getItem("user") === listing.owner.name) {
            const ownerButtonsDiv = document.getElementById("owner-buttons");

            const editPostButton = document.createElement("button");
            editPostButton.textContent = "Edit post";
            editPostButton.className = "w-[150px] h-[40px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[10px] mr-2";

            const deletePostButton = document.createElement("button");
            deletePostButton.textContent = "Delete post";
            deletePostButton.className = "w-[150px] h-[40px] bg-[#ff4d4d] hover:bg-[#ff6666] text-white rounded-[10px]";

            editPostButton.addEventListener("click", () => {
                const updateId = listing.id;
                localStorage.setItem("listingId", updateId);
                window.location.href = "/listing/edit/";
            });

            deletePostButton.addEventListener("click", () => {
                const updateId = listing.id;
                localStorage.setItem("listingId", updateId);
                onDeletePost();
            });

            ownerButtonsDiv.appendChild(editPostButton);
            ownerButtonsDiv.appendChild(deletePostButton);
        }

    }catch (error){
        console.error(error)
    }
}
renderListing()
header()