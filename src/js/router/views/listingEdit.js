import {getDataFromPost, onUpdatePost} from "../../../../ui/listing/edit.js";

getDataFromPost()


const form = document.forms.editListing;

if (form) {
    form.addEventListener("submit", onUpdatePost);
} else {
    console.error("Form not found");
}