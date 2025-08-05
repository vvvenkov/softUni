function toggle() {

    const unhide = document.getElementById("extra");
    const button = document.getElementsByClassName("button")[0];

    if (button.textContent === "More") {
        button.textContent = "Less";
        unhide.style.display = "block";
    } else {
        button.textContent = "More"
        unhide.style.display = "none";
    }
}