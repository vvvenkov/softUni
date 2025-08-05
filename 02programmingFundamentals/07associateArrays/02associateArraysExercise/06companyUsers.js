function companyUsers(input) {
    let map = new Map();

    for (let el of input) {
        let [company, employee] = el.split(" -> ");

        if (!map.has(company)) {
            map.set(company, new Set());
            map.get(company).add(employee)
        } else {
            map.get(company).add(employee);
        }
    }
    let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sorted) {
        console.log(el[0]);
        for(let key of Array.from(el[1])){
            console.log("-- " + key);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
console.log("------------");
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])