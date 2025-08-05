function attachEventsListeners() {
    const inputDistance = document.getElementById("inputDistance");
    const inputUnit = document.getElementById('inputUnits');

    const button = document.getElementById('convert');

    const outputDistance = document.getElementById('outputDistance');
    const outputUnit = document.getElementById('outputUnits');

    button.addEventListener('click', calculate);

    function calculate() {
        if (inputUnit.selectedIndex === 0) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = inputDistance.value; break;
                case 1: outputDistance.value = inputDistance.value * 1000; break;
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        } else if (inputUnit.selectedIndex === 1) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = inputDistance.value / 1000; break;
                case 1: outputDistance.value = inputDistance.value; break;
                case 2: outputDistance.value = inputDistance.value * 100; break;
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        } else if (inputUnit.selectedIndex === 2) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = '';
                case 1: outputDistance.value = ''
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        }
        else if (inputUnit.selectedIndex === 3) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = '';
                case 1: outputDistance.value = ''
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        } else if (inputUnit.selectedIndex === 4) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = '';
                case 1: outputDistance.value = ''
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        } else if (inputUnit.selectedIndex === 5) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = '';
                case 1: outputDistance.value = ''
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        } else if (inputUnit.selectedIndex === 6) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = '';
                case 1: outputDistance.value = ''
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        } else if (inputUnit.selectedIndex === 6) {
            switch (outputUnit.selectedIndex) {
                case 0: outputDistance.value = '';
                case 1: outputDistance.value = ''
                case 2: outputDistance.value = ''
                case 3: outputDistance.value = ''
                case 4: outputDistance.value = ''
                case 5: outputDistance.value = ''
                case 6: outputDistance.value = ''
                case 7: outputDistance.value = ''
            }
        }
    }
}