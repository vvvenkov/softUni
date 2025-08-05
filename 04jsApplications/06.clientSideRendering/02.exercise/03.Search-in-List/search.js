import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsList = document.getElementById("towns");
const result = document.getElementById("result");
const inputRef = document.querySelector("input");
document.querySelector("button").addEventListener("click", search);

render(ulTemplate(towns), townsList);


function search() {
   const searchText = inputRef.value.toLowerCase(); 
   const match = towns.filter(town => town.toLowerCase().includes(searchText)); 
   
   update(match);
   renderMatchCount(match.length);
}

function update(match) {
   render(ulTemplate(towns, match), townsList);
}

function ulTemplate(towns, match) {
   return html`<ul>${towns.map(town => createLiTemplate(town, match?.includes(town)))}</ul>`;
}

function createLiTemplate(town, isActive) {
   return html`<li class=${isActive ? "active" : ""}>${town}</li>`;
}

function renderMatchCount(match) {
   render((`${match} matches found`), result);
}