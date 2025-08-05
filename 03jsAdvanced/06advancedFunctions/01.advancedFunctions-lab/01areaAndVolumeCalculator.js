function solve(area, vol, input) {
    let data = JSON.parse(input);      //parse the input 

    let result = [];                    //make the result array 

    for (let el of data) {
        let areaCalc = area.call(el);       //call the functions's context
        let volCalc = vol.call(el);

        result.push({                       //push the values in an array of objects
            area: areaCalc,
            volume: volCalc
        });
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
console.table(solve(area, vol, `[   
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))