function commonElements(arr1, arr2) {
    let charArr1 = "";

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let curChar1 = arr1[i];
            let curChar2 = arr2[j];
            if (curChar1 === curChar2) {
                console.log(curChar1);
                break;
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
console.log("------------");
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])
