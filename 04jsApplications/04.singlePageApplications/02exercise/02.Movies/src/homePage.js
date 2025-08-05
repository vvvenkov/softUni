import { showView } from "./utils.js";
import { onDetails } from "./detailsPage.js";

const section = document.querySelector("#home-page");
const moviesSection = document.querySelector("#movies-list");

export function homePage() {
    showView(section);
    loadMovies();
}

async function loadMovies() {
    try {
        const response = await fetch("http://localhost:3030/data/movies", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const movies = await response.json();

        createMoviePreview(movies);
    } catch (error) {
        alert(error.message);
    }
}

function createMoviePreview(movies) {
    moviesSection.innerHTML = "";

    Object.values(movies).forEach(element => {
        const li = document.createElement('li');
        li.className = "card mb-4";
        li.innerHTML = `
            <img class="card-img-top" src="${element.img}" alt="Card image cap" width="400">
            <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <a href="/details/${element._id}">
            <button data-id="${element._id}" type="button" class="btn btn-info">Details</button>
            </a>
            </div>
            <div class="card=footer">
            </div>
        `;
        const button = li.querySelector('button');
        button.addEventListener('click', () => onDetails(element._id));
        moviesSection.appendChild(li);

        if (sessionStorage.user) {
            button.style.display = "inline-block"
        } else {
            button.style.display = "none";
        }
    });
}
