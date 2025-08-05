function register() {

    const buttonElem = document.querySelector('button');
    const formElem = document.querySelector('form');
    const notificationParagraphElem = document.querySelector(".notification");
    document.getElementById('logout').style.display = "none";

    buttonElem.addEventListener('click', onRegsiter);

    async function onRegsiter(event) {
        event.preventDefault();

        try {
            const formData = new FormData(formElem);
            const email = formData.get("email");
            const password = formData.get("password");
            const rePass = formData.get("rePass");

            if (!email) {
                notificationParagraphElem.textContent = "Email is required!";
            } else if (!password) {
                notificationParagraphElem.textContent = "Password is required!";
            } else if (password !== rePass) {
                notificationParagraphElem.textContent = "Password and Repeat must match!";
            }

            if (email && password && rePass) {
                const response = await fetch("http://localhost:3030/users/register", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });
            }

            if (!response.ok) {
                const err = new Error(response.statusText);
                throw err;
            }
            const data = await response.json();

            sessionStorage.setItem("accessToken", data.accessToken);
            sessionStorage.setItem("loggedUser", data.email);
            sessionStorage.setItem("id", data._id);

            window.location = 'index.html';
        } catch (error) {
            notificationParagraphElem.textContent = error.message || "An error occurred during registration";
        }
    }
}
register();
