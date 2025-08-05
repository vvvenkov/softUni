function echoType(parameter) {
    type = typeof(parameter);

    if (type === "string" || type === "number") {
        console.log(typeof(parameter));
        console.log(parameter);
    } else {
        console.log(parameter);
        console.log("Parameter is not suitable for printing");
    }

}
echoType(null)