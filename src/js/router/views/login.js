import {onLogin} from "../../../../ui/auth/login.js";
import {header} from "../../../../ui/global/header.js";

const form = document.forms.login;

form.addEventListener("submit", onLogin);
header()