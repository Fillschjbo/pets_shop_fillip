import {register} from "../../src/js/api/auth/register.js";

export async function onRegister(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let bio = document.getElementById("bio").value;
    let avatar = document.getElementById("avatar").value;
    let password = document.getElementById('password').value;

    try {
        const data = await register({ name, email, bio, avatar, password });
        alert('Registration successful', data);
    } catch (error) {
        console.error('Registration failed', error);
    }
}