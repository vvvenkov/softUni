function argumentInfo(...args) {

    let result = {};

    for (let arg of args) {
        let type = typeof (arg);
        console.log(`${type}: ${arg}`)

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] += 1;
    }

    Object.entries(result)
        .sort(([k1, v1], [k2, v2]) => v2 - v1)
        .forEach(([k, v]) => {
            console.log(`${k} = ${v}`);
        });
}
argumentInfo('cat', 42, 'cat', function () { console.log('Hello world!'); })