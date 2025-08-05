import { showView } from "./utils.js";

const section = document.querySelector('#movie-example');
export function onDetails(movieId) {
    event.preventDefault();
    onLoad(movieId);
    showView(section);
}

async function onLoad(movieId) {
    try {
        const response = await fetch(`http://localhost:3030/data/movies/${movieId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            const error = response.json();
            throw new Error(error.message);
        };

        appendMovies(await response.json());
    } catch (error) {
        alert(error.message)
    }
}

async function appendMovies(movie) {
    const div = document.createElement("div");
    div.classList = "container";

    const user = JSON.parse(sessionStorage.getItem("user"));

    div.innerHTML = `
        <div class="row bg-light text-dark">
          <h1>Movie title: ${movie.title}</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}"
              alt="Movie" />
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
             ${movie.description}
            </p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">${`Liked ${await numberOfLikes(movie._id)}`}</span>
          </div>
        </div>
      `;

    const deleteButton = div.querySelector(".btn-danger");
    deleteButton.addEventListener("click", onDelete);

    const editButton = div.querySelector(".btn-warning");
    editButton.addEventListener("click", onEdit);

    const likeButton = div.querySelector(".btn-primary")

    hasLiked(movie._id, user, likeButton)


    if (movie._ownerId === user._id) {
        deleteButton.style.display = "inline-block";
        editButton.style.display = "inline-block";
        likeButton.style.display = "none";
    } else {
        deleteButton.style.display = "none";
        editButton.style.display = "none";
        likeButton.style.display = "inline-block";
    }
    section.replaceChildren(div);
}

async function numberOfLikes(movieId) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
    return response.json();
};

async function hasLiked(movieId, user, likeButton) {
    try {
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${user._id}%22`, {
            method: "GET",
            headers: {
                "Content-type": "Application/json",
            }
        });


        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const likes = await response.json();

        if (likes.length > 0) {
            likeButton.textContent = "Unlike";
        }

        likeButton.addEventListener("click", () => onLike(likeButton, movieId, user, likes));
    } catch (error) {
        alert(error.message);
    }
}

async function onDelete(userId) {

};

async function onEdit() {

};

async function onLike(likeButton, movieId, user, likes) {
    if (likeButton.textContent === "Like") {
        try {
            const response = await fetch(`http://localhost:3030/data/likes`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "X-authorization": user.accessToken,
                },
                body: JSON.stringify({ movieId })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            onLoad(movieId);
            likeButton.textContent = "Unlike"
        } catch (error) {
            alert(error.message);
        }
    } else if (likeButton.textContent === "Unlike") {
        const like = likes[0];

        try {
            const response = await fetch(`http://localhost:3030/data/likes/${like._id}`, {
                method: "DELETE",
                headers: {
                    "X-Authorization": user.accessToken,
                },
            });

            if (!response.ok) {
                const error = response.json();
                throw new Error(error.message);
            };

            likeButton.textContent = "Like";
            onLoad(movieId);
        } catch (error) {
            alert(error.message);
        }
    }
}
