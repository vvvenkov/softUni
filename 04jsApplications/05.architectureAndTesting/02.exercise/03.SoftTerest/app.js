import { showHomeView } from "./src/views/homeView.js";
import { showLoginView } from "./src/views/loginView.js";
import { showRegisterView } from "./src/views/registerView.js";
import { showDashboardView } from "./src/views/dashboardView.js";
import { showCreateView } from "./src/views/createView.js";
import { showEditView } from "./src/views/editView.js";
import { userUtils } from "./src/utils/userUtils.js";
import { userService } from "./src/api/userService.js";

Array.from(document.querySelectorAll("div[data-section]")).forEach(section => section.remove());
const main = document.querySelector("main");
const nav = document.querySelector("nav");
nav.addEventListener('click', onNavigate);

const routes = {
    "/": showHomeView,
    "/login": showLoginView,
    "/register": showRegisterView,
    "/dashboard": showDashboardView,
    "/create": showCreateView,
    "/edit": showEditView,
    "/logout": onLogout
}

async function onLogout() {
    await userService.logout();
    updateNav();
    goTo("/");
}

function onNavigate(e) {
    e.preventDefault();
    let target = e.target;

    if (target.tagName !== 'A') {
        target = e.target.parentElement;
    };

    if (!target.href) {
        return;
    }

    const currentUrl = new URL(target.href);
    const viewName = currentUrl.pathname;

    goTo(viewName)
}

function updateNav() {
    let hasUser = userUtils.getUser();
    const userA = document.querySelectorAll("a[data-user]");
    const guestA = document.querySelectorAll("a[data-guest]");

    if (hasUser) {
        userA.forEach(a => a.style.display = "block");
        guestA.forEach(a => a.style.display = "none");
    } else {
        userA.forEach(a => a.style.display = "none");
        guestA.forEach(a => a.style.display = "block");
    }
}
const context = {
    goTo,
    updateNav
}

function goTo(name) {
    const handler = routes[name];
    handler(context);
}

// start page
goTo("/");
updateNav();