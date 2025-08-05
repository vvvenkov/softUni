function matchFullName(input) {
    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/
    let match = pattern.exec(input);
    let res = [];

    while (match !== null) {
        res.push(match[0]);

        match = pattern.exec(input);
    }
    console.log(res.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov")  