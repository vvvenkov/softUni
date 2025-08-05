import { homePage } from "./homePage.js";
import { showView, updateNavBar } from "./utils.js";

const section = document.getElementById('form-sign-up');

const form = document.querySelector("#register-form")
form.addEventListener("submit", onSubmit);

export function registerPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    if (!email || !password || !repeatPassword) {
        alert("Please fill in all fields!")
        return;
    } else if (password.length < 6) {
        alert("Password should be a minimum of 6 characters!")
    } else if (password !== repeatPassword) {
        alert("Password and repeat passwords should match!")
    }

    try {
        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const user = await response.json();

        sessionStorage.setItem("user", JSON.stringify(user));
        form.reset();
        homePage();
        updateNavBar();
    } catch (error) {
        alert(error.message);
    }
}