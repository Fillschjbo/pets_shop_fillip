import {onRegister} from "../../../../ui/auth/register.js";
import {header} from "../../../../ui/global/header.js";

const form = document.forms.register;

form.addEventListener("submit", onRegister);
header()