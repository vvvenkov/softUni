function listOfProducts(arr){
    let sortedFruits = arr.sort();

    for (let i = 1; i <= arr.length; i++){
        console.log(`${i}.${sortedFruits[i - 1]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])