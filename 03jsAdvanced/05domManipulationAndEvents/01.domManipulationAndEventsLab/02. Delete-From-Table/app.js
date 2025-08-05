function deleteByEmail() {
    //Select elemtents 
    const inputElement = document.querySelector("input[name=email]");    //selects a specific input with the name "email"
    const resultElement = document.querySelector("#result");

    //Select all rows 
    const trElements = document.querySelectorAll("#customers tbody tr");

    //Find matching row 
    let resultRow = Array.from(trElements).find(tr => tr.getElementsByTagName('td')[1].textContent === inputElement.value);

    //Remove row and append result 
    if (resultRow) {
        resultRow.remove();
        resultElement.textContent = "Deleted";


        inputElement.value = "";
        inputElement.focus();
    } else {
        resultElement.textContent = "Not found."
    
        inputElement.focus(); //
    }
}