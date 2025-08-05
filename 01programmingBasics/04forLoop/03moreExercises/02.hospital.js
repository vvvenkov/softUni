    function hospital(input) {
    let time = Number(input[0]);
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let dayCounter = 0;
    for (let day = 1; day <= time; day++) {
        let patients = Number(input[day]);

        if (day % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++;
        } 

        if (patients <= doctors) {
            treatedPatients += patients;
        } else {
            untreatedPatients += Math.abs(doctors - patients);
            treatedPatients += doctors;
        }
    }

    console.log("Treated patients: " + treatedPatients + ".");
    console.log("Untreated patients: " + untreatedPatients + ".");

}
hospital([3, 7, 7, 7])