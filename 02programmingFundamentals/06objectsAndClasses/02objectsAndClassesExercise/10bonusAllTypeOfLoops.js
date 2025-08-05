function loops() {
    let arr = [1, 2, 3, 4];


    for (let i = 0; i < arr.length; i++) {   //classic for-cycle, when we need the indexes
        console.log(arr[i]);
    }

//----------------------------------------------------------------------------------------------
    
    for (let el of arr) {                //for-of, imperativen nachin, not functional, when we don't need the indexes
        console.log(el);
    }


// ----------------------------------------------------------------------------------------------
    
    arr.forEach(el => console.log(el));      // functional syntaxes, get used to it  

                    // these cycles all do the exact same thing, USED FOR ARRAYS
} 


function ObjectLoops() {

    let obj = {
        name: "asd",
        age: 20
    };

    for (let key in obj) {                  //for-in cycle, when we need to loop an OBJECT
        console.log(key, obj[key]);
    }
}
ObjectLoops()