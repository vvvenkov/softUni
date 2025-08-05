function generateReport() {
    let output = document.querySelector('#output');                  //get the output textArea where we need to put the data
    let checkBoxes = document.querySelectorAll('thead tr th input');   //get the checkboxes
    let data = document.querySelectorAll('tbody tr');                   //get the employess data

    let result = []                                                   //make the result array;

    for (let i = 0; i < data.length; i++) {                   //loop the data rows
        let report = {};                                        //make an object which refreshes every iteration of the main loop
        for (let j = 0; j < checkBoxes.length; j++) {            //nested loop for the checkboxes
            if (boxes[j].checked) {
                report[boxes[j].name] = data[i].children[j].textContent
            }
        }
        result.push(report)
    }
    output.textContent = JSON.stringify(result, null, 2)
}