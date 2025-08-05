export function showView(section) {
    document.querySelectorAll(".view-section").forEach(section => section.style.display = "none");
    section.style.display = "block";
}

export function updateNavBar() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
        document.querySelectorAll(".user").forEach(element => element.style.display = "inline-block");
        document.querySelectorAll(".guest").forEach(element => element.style.display = "none");
        document.querySelector("#welcome-msg").textContent = `Welcome ${user.email}`;
    } else {
        document.querySelectorAll(".user").forEach(element => element.style.display = "none");
        document.querySelectorAll(".guest").forEach(element => element.style.display = "inline-block");
    }
}