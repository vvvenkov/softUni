function focused() {
    const inputClick = document.querySelectorAll('div div input');    //get the  input fields of the divs of the main div 

    for (let input of inputClick) {
        input.addEventListener('focus', event => {                      //set the classList to 'focused' when the input fields are selected
            event.currentTarget.parentElement.classList = 'focused';           
        })        
        input.addEventListener('blur', event => {
            event.currentTarget.parentElement.classList = '';            //set the classList to null, when the input fields are unselected
        })
    };
}