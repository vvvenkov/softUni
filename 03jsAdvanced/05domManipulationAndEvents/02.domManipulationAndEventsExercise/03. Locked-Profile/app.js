function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');
    let unclockButtons = [];
    let hiddenDivs = [];
    let showMoreButtons = [];

    for (let profile of profiles) {
        let unclockButton = profile.children[4];
        let hiddenDiv = profile.children[9];
        let showMoreButton = profile.children[10];

        unclockButtons.push(unclockButton);
        hiddenDivs.push(hiddenDiv);
        showMoreButtons.push(showMoreButton);
    }

    showMoreButtons.forEach(button => button.addEventListener('click', showMore));

    function showMore(event) {
        let hideUnhide = event.currentTarget.parentElement.children[9];
        let locked = event.currentTarget.parentElement.children[2];
        let button = event.currentTarget;

        if (!locked.checked) {
            if (button.textContent === 'Show more') {
                hideUnhide.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                button.textContent = 'Show more';
                hideUnhide.style.display = 'none';
            }
        }
    }
}


