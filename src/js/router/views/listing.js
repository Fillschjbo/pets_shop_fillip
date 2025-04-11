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
        <div>
            <img src=${listing.image.url} alt=${listing.image.alt}>
            <p>${listing.description}</p>
        </div>
        <div>
            <h2>${listing.name}, ${listing.age}</h2>
            <ul>
                <li class="adoptionStatus">
                    ${listing.adoptionStatus === "available" || "Available" ? "Available" : "Pending"
                }</li>
                <li>${listing.location}</li>
                <li>${listing.species}</li>
                <li>${listing.breed}</li>
                <li>${listing.gender}</li>
                <li>${listing.size}</li>
            </ul>
        </div>
        `
        ;

    }catch (error){
        console.error(error)
    }
}
renderListing()