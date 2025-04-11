import {readPosts} from "../../api/listing/read.js";

const postContiner = document.querySelector(".postContainer")

async function displayListings(page = 1, sort = "created", sortOrder = "desc"){
    const data = await readPosts(25, page, sort, sortOrder);
    if (!data) {
        alert("Failed to load posts");
        return;
    }

    const listings = data.data

    postContiner.innerHTML = listings.map((listing) => {
        return`
            <a class="listing-card font-primary text-[#1C2541] hover:cursor-pointer group" data-id="${listing.id}">
                <div class="w-[348px] h-[262px] overflow-hidden rounded-[20px]">
                     <img src=${listing.image.url} alt=${listing.image.alt}, class="w-[348px] h-[262px] rounded-[20px] object-cover transition-transform duration-300 group-hover:scale-105">
                </div>
                <div class="flex pt-[10px] gap-[4px]">
                         <img src="/assets/icons/Location.svg" alt="Location icon">  
                         <p class="text-[12px] text-[#787E8E]">${listing.location}</p>
                     </div>
                <h2 class="pt-[16px] font-extrabold text-[24px]">${listing.name}, ${listing.age}</h2>
                <ul class="text-[#787E8E] text-[12px] pt-[18px] flex flex-col gap-[12px]">
                    <li class="flex gap-[4px]">
                        <img src="/assets/icons/Pets.svg" alt="Gender Icon">
                        <p>${listing.breed}</p>
                    </li>
                    <li class="flex gap-[4px]">
                        <img src="/assets/icons/Gender.svg" alt="Gender Icon">
                        <p>${listing.gender}</p>
                    </li>
                    <li class="flex gap-[4px]">
                        <img src="/assets/icons/Ruler.svg" alt="Size Icon">
                        <p>${listing.size}</p>
                    </li>
                </ul>
            </a>
        `
    }).join("")

    const listingCard = document.querySelectorAll(".listing-card")
    listingCard.forEach((card) => {
        const listingId = card.getAttribute("data-id");

        card.addEventListener("click", () => {
            localStorage.setItem("listingId", listingId);
            window.location.href = "/listing/";
        });
    })
}

displayListings()