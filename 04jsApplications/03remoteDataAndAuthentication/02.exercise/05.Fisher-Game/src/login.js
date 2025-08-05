function login() {
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        document.getElementById("logout").style.display = "inline";
    } else {
        document.getElementById("logout").style.display = "none";
    }

    const buttonElem = document.querySelector('button');
    const formElem = document.querySelector('form');
    const notificationParagraphElem = document.querySelector(".notification");

    buttonElem.addEventListener('click', onLogin);

    async function onLogin(event) {
        event.preventDefault();

        try {
            const formData = new FormData(formElem);
            const email = formData.get("email");
            const password = formData.get("password");

            if (!email) {
                notificationParagraphElem.textContent = "Email is required!";
            } else if (!password) {
                notificationParagraphElem.textContent = "Password is required!";
            }

            if (email && password) {
                const response = await fetch("http://localhost:3030/users/login", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Login failed");
                }
                const data = await response.json();

                sessionStorage.setItem("accessToken", data.accessToken);
                sessionStorage.setItem("loggedUser", data.email);
                sessionStorage.setItem("id", data._id);

                window.location = 'index.html';
            }
        } catch (error) {
            notificationParagraphElem.textContent = error.message || "An error occurred during login";
        }
    }
}
login();