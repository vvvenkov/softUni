function carNumber(input) {
    let beginning = Number(input[0]);
    let ending = Number(input[1]);
    let numbers = "";

    for (let i = beginning; i <= ending; i++) {
        for (let y = beginning; y <= ending; y++) {
            for (let j = beginning; j <= ending; j++) {
                for (let k = beginning; k <= ending; k++) {
                    if (i % 2 === 0 && k % 2 !== 0) {
                        if (i > k) {
                            if ((y + j) % 2 === 0) {
                                numbers += (`${i}${y}${j}${k} `)
                            }
                        }
                    } else if (i % 2 !== 0 && k % 2 === 0) {
                        if (i > k) {
                            if ((y + j) % 2 === 0) {
                                numbers += (`${i}${y}${j}${k} `)
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(numbers);
}
carNumber([2, 3])