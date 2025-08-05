function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let palindrome = String(arr[i]);
        let buff = "";
        for (let j = palindrome.length - 1; j >= 0; j--) {
            buff += palindrome[j];

        }
        console.log(buff === palindrome);
    }
}
palindromeIntegers([123, 323, 421, 121])
console.log("-------------------------------");
palindromeIntegers([32, 2, 232, 10, 10])