import { userService } from "../api/userService.js";

const main = document.querySelector("main");
const section = document.querySelector("div[data-section='login']")
const formRef = section.querySelector("form");

formRef.addEventListener("click", onSubmit);

let context = null;
export function showLoginView(ctx) {
    context = ctx;
    main.replaceChildren(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    if (!email || !password) {
        return alert("oops");
    }

    await userService.login({ email, password });
    context.updateNav();
    context.goTo("/");
}

