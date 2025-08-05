function validate() {
    const input = document.getElementById('email');             // get the input text

    //add the event lsitener
    input.addEventListener('change', (event) => {
        const email = event.currentTarget.value;                //make the event variable 

        const pattern = /[a-z]+@[a-z]+(.)[a-z]+/;              //write the regEx pattern 

    
        if (pattern.test(email)){
            event.currentTarget.classList.remove('error');          //check if the variable matches the pattern
        } else { 
            event.currentTarget.classList.add('error');             //change the classList accordingly 
        }
    });
}