function oldBookShelf(input) {
    let index = 0;
    let book = input[index];
    index++;

    let currentBook = input[index];
    index++

    let boolean = false;
    let booksSearched = 0;

    while (currentBook !== "No More Books") {
        if (currentBook === book) {
            boolean = true;
            break;
        }
        booksSearched++;
        
        currentBook = input[index];
        index++;
    }
    if (boolean) {
        console.log(`You checked ${booksSearched} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksSearched} books.`);
    }
}
oldBookShelf(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])