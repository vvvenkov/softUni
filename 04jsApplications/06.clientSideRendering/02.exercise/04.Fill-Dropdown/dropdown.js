import { html, render } from "../node_modules/lit-html/lit-html.js";

const dropDownRef = document.getElementById("menu");

function addItem() {

}

async function requester() {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
    const data = await response.json();

    Object.values(data).map(dat => createList(dat));

}

function createList(dat) {
    return html
        `<option value="${dat.id}">${dat.city}</option>`
}

render((requester(data)), dropDownRef)

requester()
