import {readPost} from "../../src/js/api/listing/read.js";
import {editListing} from "../../src/js/api/listing/edit.js";

export async function getDataFromPost(){
    const data = await readPost();

    if (!data || !data.data) {
        alert("Could not fetch data!");
        return;
    }

    const post = data.data;

    document.getElementById("name").value = post.name || '';
    document.getElementById("age").value = post.age || '';
    document.getElementById("location").value = post.location || '';
    document.getElementById("species").value = post.species || '';
    document.getElementById("breed").value = post.breed || '';
    document.getElementById("gender").value = post.gender || '';
    document.getElementById("color").value = post.color || '';
    document.getElementById("size").value = post.size || '';
    document.getElementById("description").value = post.description || '';
    document.getElementById("image").value = post.image.url || '';
}

export async function onUpdatePost(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const age = parseInt(form.age.value);
    const location = form.location.value;
    const species = form.species.value;
    const breed = form.breed.value;
    const gender = form.gender.value;
    const color = form.color.value;
    const size = form.size.value;
    const description = form.description.value;
    const image = form.image.value;

    const updateData = {
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
        const response = await editListing(updateData);

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