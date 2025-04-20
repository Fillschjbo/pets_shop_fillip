import {onCreateListing} from "../../../../ui/listing/create.js";
import {header} from "../../../../ui/global/header.js";


const form = document.forms.createListing;

form.addEventListener("submit", onCreateListing);
header()