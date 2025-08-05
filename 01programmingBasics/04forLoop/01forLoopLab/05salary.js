function salary(input) {
    let salary = Number(input[1]);

    for (let index = 2; index <= input.length; index++) {
        let openTab = input[index];

        if (openTab === "Facebook") {
            salary -= 150;
        } else if (openTab === "Instagram") {
            salary -= 100;
        } else if (openTab === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }

    if (salary > 0) {
        console.log(Math.floor(salary));
    }
}
salary((["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
)