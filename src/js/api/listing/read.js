import {API_PET} from "../constants.js";

function getOptions(){
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
}

export async function readPosts(limit = 25, page = 1, sort = null, sortOrder = "desc"){
    const url = new URL(API_PET)

    url.searchParams.append("limit", limit)
    url.searchParams.append("page", page)

    if (sort) {
        url.searchParams.append("sort", sort)
        url.searchParams.append("sortOrder", sortOrder)
    }

    try {
        const response = await fetch(url.toString(), getOptions());
        if (!response.ok){
            throw new Error(`error fetching post: ${response.statusText}`)
        }
        const data = await response.json();
        return data;
    }catch (error){
        console.error("Error:", error.message)
    }
}

export async function readPost(){
    const id = localStorage.getItem("listingId")
    if (!id){
        throw new Error("Could not find id")
    }

    const response = await fetch(`${API_PET}/${id}`);
    if (!response) {
        throw new Error(`error fetching: ${response.status}`)
    }
    const data = await response.json();
    console.log(data)
    return data;
}