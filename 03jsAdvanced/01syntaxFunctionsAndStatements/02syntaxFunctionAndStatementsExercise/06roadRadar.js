function roadRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let status = "";
    let limit = "";

    if (area === "motorway") {
        limit = motorwayLimit;
    } else if (area === "interstate") {
        limit = interstateLimit;
    } else if (area === "city") {
        limit = cityLimit;
    } else if (area === "residential") {
        limit = residentialLimit;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        if (speed > limit + 40) {
            status = "reckless driving";
        } else if (speed > limit + 20) {
            status = "excessive speeding";
        } else if (speed > limit) {
            status = "speeding";
        }
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRadar(21, 'residential')