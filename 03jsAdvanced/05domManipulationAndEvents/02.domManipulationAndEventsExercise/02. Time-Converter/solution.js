function attachEventsListeners() {
    const inputDays = document.querySelector('#days');
    const inputHours = document.querySelector('#hours');
    const inputMinutes = document.querySelector('#minutes');
    const inputSeconds = document.querySelector('#seconds');

    const daysButton = document.querySelector('#daysBtn');
    const hoursButton = document.querySelector('#hoursBtn');
    const minutesButton = document.querySelector('#minutesBtn');
    const secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', () => {
        inputHours.value = Math.trunc(inputDays.value * 24);
        inputMinutes.value = inputDays.value * 1440;
        inputSeconds.value = inputDays.value * 86400;
    });

    hoursButton.addEventListener('click', () => {
        inputDays.value = (inputHours.value / 24).toFixed(1);
        inputMinutes.value = Math.trunc(inputHours.value * 60);
        inputSeconds.value = Math.trunc(inputHours.value * 3600);
    });

    minutesButton.addEventListener('click', (event) => {
        inputDays.value = (inputMinutes.value / 1440).toFixed(1);
        inputHours.value = Math.trunc(inputMinutes.value / 60);
        inputSeconds.value = Math.trunc(inputMinutes.value * 60);
    });

    secondsButton.addEventListener('click', (event) => {
        inputDays.value = (inputSeconds.value / 86400).toFixed(1);
        inputHours.value = Math.trunc(inputSeconds.value / 3600);
        inputMinutes.value = Math.trunc(inputSeconds.value / 60);
    });

}