function app() {

    const accessToken = sessionStorage.getItem('accessToken');
    const loggedUserEmail = sessionStorage.getItem("loggedUser");
    const addForm = document.querySelector("#addForm");
    const span = document.querySelector("span");

    document.querySelector(".load").addEventListener("click", onLoad);
    const addButton = document.querySelector(".add");
    addButton.addEventListener("click", onAdd);

    const catches = document.querySelector("#catches");

    if (loggedUserEmail) {
        span.textContent = loggedUserEmail;
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
        span.textContent = "guest";
    }

    if (accessToken) {
        document.getElementById('login').style.display = "none";
        document.getElementById('register').style.display = "none";

        document.getElementById('logout').style.display = "inline";
    } else {
        document.getElementById('login').style.display = "inline";
        document.getElementById('register').style.display = "inline";

        document.getElementById('logout').style.display = "none";
    }
    document.getElementById('logout').addEventListener('click', onLogout);

    async function onLogout() {
        try {
            const response = await fetch("http://localhost:3030/users/logout", {
                method: "GET",
                headers: {
                    "X-Authorization": accessToken,
                },
            });

            if (!response.ok) {
                throw new Error('Logout failed');
            }

            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('loggedUser');
            sessionStorage.removeItem('id');

            window.location = "index.html";
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    async function onLoad() {
        try {
            const response = await fetch("http://localhost:3030/data/catches");
            if (!response.ok) {
                throw new Error('Failed to load catches');
            }
            const data = await response.json();

            catches.innerHTML = "";

            Object.values(data).forEach(el => {
                const div = document.createElement("div");
                div.className = "catch";

                const anglerLabel = document.createElement("label");
                anglerLabel.textContent = "Angler";
                const anglerInput = document.createElement("input");
                anglerInput.type = "text";
                anglerInput.className = "angler";
                anglerInput.value = el.angler;

                const weightLabel = document.createElement("label");
                weightLabel.textContent = "Weight";
                const weightInput = document.createElement("input");
                weightInput.type = "text";
                weightInput.className = "weight";
                weightInput.value = el.weight;

                const speciesLabel = document.createElement("label");
                speciesLabel.textContent = "Species";
                const speciesInput = document.createElement("input");
                speciesInput.type = "text";
                speciesInput.className = "species";
                speciesInput.value = el.species;

                const locationLabel = document.createElement("label");
                locationLabel.textContent = "Location";
                const locationInput = document.createElement("input");
                locationInput.type = "text";
                locationInput.className = "location";
                locationInput.value = el.location;

                const baitLabel = document.createElement("label");
                baitLabel.textContent = "Bait";
                const baitInput = document.createElement("input");
                baitInput.type = "text";
                baitInput.className = "bait";
                baitInput.value = el.bait;

                const captureTimeLabel = document.createElement("label");
                captureTimeLabel.textContent = "Capture Time";
                const captureTimeInput = document.createElement("input");
                captureTimeInput.type = "number";
                captureTimeInput.className = "captureTime";
                captureTimeInput.value = el.captureTime;
                
                div.appendChild(anglerLabel);
                div.appendChild(anglerInput);
                div.appendChild(weightLabel);
                div.appendChild(weightInput);
                div.appendChild(speciesLabel);
                div.appendChild(speciesInput);
                div.appendChild(locationLabel);
                div.appendChild(locationInput);
                div.appendChild(baitLabel);
                div.appendChild(baitInput);
                div.appendChild(captureTimeLabel);
                div.appendChild(captureTimeInput);

                const updateButton = document.createElement("button");
                updateButton.addEventListener("click", onUpdate);
                updateButton.setAttribute("data-id", el._id);
                updateButton.className = "update";
                updateButton.textContent = "update";

                const deleteButton = document.createElement("button");
                deleteButton.addEventListener("click", onDelete);
                deleteButton.setAttribute("data-id", el._id);
                deleteButton.className = "delete";
                deleteButton.textContent = "delete";

                div.appendChild(updateButton);
                div.appendChild(deleteButton);
                catches.appendChild(div);

                const loggedUserId = sessionStorage.getItem('id');

                if (loggedUserId !== el._ownerId) {
                    updateButton.disabled = true;
                    deleteButton.disabled = true;
                } else {
                    updateButton.disabled = false;
                    deleteButton.disabled = false;
                }
            });
        } catch (error) {
            console.error('Load catches error:', error);
        }
    }
    async function onUpdate(event) {
        try {
            const catchDivElement = event.target.parentElement;
            const angler = catchDivElement.querySelector('.angler').value;
            const weight = catchDivElement.querySelector('.weight').value;
            const species = catchDivElement.querySelector('.species').value;
            const location = catchDivElement.querySelector('.location').value;
            const bait = catchDivElement.querySelector('.bait').value;
            const captureTime = catchDivElement.querySelector('.captureTime').value;

            const response = await fetch(`http://localhost:3030/data/catches/${event.target.dataset.id}`, {
                method: "PUT",
                headers: {
                    "X-authorization": accessToken
                },
                body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
            });

            if (!response.ok) {
                throw new Error(error.message);
            }

            await onLoad();
        } catch (error) {
            console.error(error);
        }
    }
    async function onDelete(event) {
        try {
            const response = await fetch(`http://localhost:3030/data/catches/${event.target.dataset.id}`, {
                method: "DELETE",
                headers: {
                    "X-authorization": accessToken,
                },
            });

            if (!response.ok) {
                throw new Error(error.message || "Login failed");
            } else {
                await onLoad();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function onAdd(event) {
        try {
            event.preventDefault();

            const form = new FormData(addForm);
            const angler = form.get("angler");
            const weight = form.get("weight");
            const species = form.get("species");
            const location = form.get("location");
            const bait = form.get("bait");
            const captureTime = form.get("captureTime");

            if (!angler || !weight || !species || !location || !bait || !captureTime) {
                return;
            }

            const response = await fetch("http://localhost:3030/data/catches", {
                method: "POST",
                headers: {
                    "X-authorization": accessToken
                },
                body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to add catch');
            }

            addForm.reset();
            await onLoad();
        } catch (error) {
            console.error('Error adding catch:', error);
            notificationParagraphElem.textContent = error.message;
        }
    }
}
app();