import {readPost} from "../../api/listing/read.js";

const listingContainer = document.querySelector(".listingContainer")

async function renderListing(){
    try{
        const data = await readPost()
        console.log(data)

        if(!data){
            alert("could not fetch data")
            return;
        }

        const listing = data.data;

        listingContainer.innerHTML =`
        <div class="lg:pr-[9vw] pt-16 h-screen">
            <img src=${listing.image.url} alt=${listing.image.alt} class="lg:w-[43vw] lg:h-[554px] object-cover rounded-[20px]">
            <p class="font-primary text-[1rem] text-[#1C2541 pt-[32px]">${listing.description}</p>
        </div>
        <div class="pt-16">
            <h2 class="font-primary font-bold lg:text-[4rem]">${listing.name}, ${listing.age}</h2>
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
                <li class="font-primary font-bold text-[#787E8E] text-[1rem]">${listing.location}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem]">${listing.species}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem]">${listing.breed}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem]">${listing.gender}</li>
                <li class="font-primary font-bold text-[#787E8E] text-[1rem]">${listing.size}</li>
            </ul>
            <button class="w-[350px] h-[51px] bg-[#3A506B] hover:bg-[#6D85A3] text-white rounded-[20px] mt-[200px]">Adopt</button>
            <div class="lg:w-[350px] flex flex-col justify-center items-center shadow-md rounded-[20px] mt-[115px] p-[0.5rem]">
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

    }catch (error){
        console.error(error)
    }
}
renderListing()