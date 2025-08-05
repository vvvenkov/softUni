function create(words) {
   let contentRef = document.getElementById('content');        //get the reference to where we need to append the divs
   createAndAppendDiv(contentRef);                             //appending function invoking

   function createAndAppendDiv(contentRef){                    //createing the appending function
      for (let i = 0; i < words.length; i++) {                 //looping the array 
         const div = document.createElement('div');            //creating the div

         const p = document.createElement('p');                //creating the p
         p.textContent = words[i];                             //adding the array content to the p
         p.style.display = 'none';                             //setting the default p display to none 
                  
         div.appendChild(p);                                  //appending the p to the div
         div.addEventListener('click', onClick);              //adding the eventListener to the div
   
         contentRef.appendChild(div);                         //appending the div to the content (function return)
      }
   }        

   function onClick(event){                                    //creating the onClick function 
      const children = event.currentTarget.children;           //getting the target's children 
      const p = children[0];                                   //get the first child of the div
      const currentDisplay = p.style.display;                           //take the p's display in a variable in order to add an if statement to it
      p.style.display = currentDisplay === 'block' ? 'none' : 'block';  //if the display is 'block' then make it 'none', if not, keep it 'block')
   }

}
