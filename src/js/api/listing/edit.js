import {API_KEY, API_PET} from "../constants.js";

export async function editListing(updateData) {
    const id = localStorage.getItem("listingId")

    try {
        const response = await fetch(`${API_PET}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "X-Noroff-API-Key": API_KEY,
            },
            body: JSON.stringify(updateData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return await response.json();

    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}