function addItem() {
    // get a reference to the elements 
    const input = document.getElementById("newItemText");
    const list = document.querySelector("#items");

    // create new li element
    const li = document.createElement('li');
    li.textContent = input.value;

    // create an element for delete
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';                  //# means it wont reload the page when clicked 
    deleteButton.textContent = '[Delete]';
    
    // Add event handler to the delete event
    deleteButton.addEventListener('click', (event) => {
        //Delete by reference
        //li.remove();                                    //currentTarget = deleteButton
        
        //Delete by parent (better way)
        event.currentTarget.parentElement.remove();     //deletes the parent of the currentTarget
    });
    
    //append delete button to li element
    li.append(deleteButton);
    
    // append li element 
    list.append(li);
    
    //additions
    input.value = "";
    input.focus();

}