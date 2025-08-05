import { homePage } from "./homePage.js";
import { showView, updateNavBar } from "./utils.js";

const section = document.getElementById('form-login');

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

export function loginPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const response = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const error = response.json();
            throw new Error(error.message);
        };
        const user = await response.json();

        sessionStorage.setItem("user", JSON.stringify(user));
        form.reset();
        updateNavBar();
        homePage();
    } catch (error) {
        alert(error.message);
    }
}