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
            <div>
                <div>
                     <img src=${listing.image.url} alt=${listing.image.alt}, class="w-[348px] h-[262px] rounded-[20px] object-cover">
                     <p>${listing.location}</p>
                </div>
                <h2>${listing.name}, ${listing.age}</h2>
                <ul>
                    <li>${listing.breed}</li>
                    <li>${listing.gender}</li>
                    <li>${listing.size}</li>
                </ul>
            </div>
        `
    }).join("")
}

displayListings()