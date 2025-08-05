import { homePage } from "./homePage.js";
import { updateNavBar } from "./utils.js";

export async function logOut() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    try {
        const response = await fetch("http://localhost:3030/users/logout", {
            method: "DELETE",
            headers: {
                "X-authorization": user.accessToken,
            },
        })

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        };

        sessionStorage.removeItem("user");
        homePage();
        updateNavBar();
    } catch (error) {
        alert(error.message)
    }
}