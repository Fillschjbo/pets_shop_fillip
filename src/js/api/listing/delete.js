import {API_KEY, API_PET} from "../constants.js";

export async function deletePost() {
    const postId = localStorage.getItem(`listingId`);

    if(!postId) {
        alert("No postId found")
        return;
    }

    try {
        const response = await fetch(`${API_PET}/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "X-Noroff-API-Key": API_KEY,
            }
        });

        return response;

    }catch (error) {
        console.error(`error updating post: `, error)
    }
}