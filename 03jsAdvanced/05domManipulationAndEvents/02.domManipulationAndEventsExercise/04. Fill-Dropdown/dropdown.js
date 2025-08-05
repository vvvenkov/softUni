function addItem() {
    const newItemText = document.getElementById('newItemText');    //get the text input
    const newItemValue = document.getElementById('newItemValue');       //get the value input
    const menu = document.getElementById('menu');                           //get the menu

    let element = document.createElement('option');                         //create the element

    if (newItemText.value === '') {
        return;
    }                                   //return an empty function value, to not append an empty string 
    if (newItemValue.value === '') {
        return;
    }

    element.textContent = newItemText.value;                //set the element's attrbiutes
    element.value = newItemValue.value;

    menu.appendChild(element);                              //append the element 

    newItemText.value = '';             //clear the input fields
    newItemValue.value = '';
}