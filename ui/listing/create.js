import { createListing } from "../../src/js/api/listing/create.js";

export async function onCreateListing(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const age = parseInt(form.age.value);
    const location = form.location.value;
    const species = form.species.value;
    const breed = form.breed.value;
    const gender = form.gender.value;
    const color = form.color.value;
    const size = form.gender.value;
    const description = form.body.value;
    const image = form.mediaUrl.value;

    const postData = {
        name: name,
        age: age,
        location: location,
        species: species,
        breed: breed,
        gender: gender,
        color: color,
        size: size,
        description: description,
        image: {url: image},
    };

    try {
        const response = await createListing(postData);

        if (response) {
            window.location.href = "/"
        } else {
            console.error("Failed to create post");
        }
    } catch (error) {
        console.error("Error creating post:", error);
        alert(`There was an error creating the post: ${error.message}`);
    }
}
