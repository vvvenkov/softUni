import { onDetails } from "./detailsPage.js";
import { homePage } from "./homePage.js";
import { loginPage } from "./loginPage.js";
import { logOut } from "./logout.js";
import { registerPage } from "./registerPage.js";
import { updateNavBar } from "./utils.js"

homePage();
updateNavBar();

const navBar = document.querySelector("nav");
navBar.addEventListener("click", onNav);

const routes = {
    "/": homePage,
    "/loginPage": loginPage,
    "/registerPage": registerPage,
    "/logout": logOut,
    "/detailsPage": onDetails
}

function onNav(event) {
    if (event.target.tagName === "A" && event.target.href) {  //if target is an anchor and if target is an href
        event.preventDefault();

        // if (event.target.text === "Login") {
        //     loginPage();
        // } else if (event.target.text === "Register") {
        //     registerPage();
        // } else if (event.target.text === "Movies") {
        //     homePage();
        // }                      //alternative way 

        const url = new URL(event.target.href);
        const view = routes[url.pathname];

        view();
    }
}