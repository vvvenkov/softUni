function extractFile(input) {
    let arrOfDirectory = input.split("\\");
    let file = arrOfDirectory[arrOfDirectory.length - 1];
    
    let arrayOfFile = file.split(".");
    let fileExtension = arrayOfFile.pop();

    console.log("File name: " + arrayOfFile.join("."));
    console.log("File extension: " + fileExtension);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')