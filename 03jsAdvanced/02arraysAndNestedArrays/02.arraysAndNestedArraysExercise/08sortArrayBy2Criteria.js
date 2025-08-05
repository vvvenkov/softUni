function sortArrayBy2Criteria(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }).forEach(x => console.log(x));
}
console.log(sortArrayBy2Criteria(['alpha',
    'beta',
    'gamma']));