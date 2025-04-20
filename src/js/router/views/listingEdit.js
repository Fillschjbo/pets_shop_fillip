import {getDataFromPost, onUpdatePost} from "../../../../ui/listing/edit.js";
import {header} from "../../../../ui/global/header.js";

getDataFromPost()


const form = document.forms.editListing;

if (form) {
    form.addEventListener("submit", onUpdatePost);
} else {
    console.error("Form not found");
}
header()