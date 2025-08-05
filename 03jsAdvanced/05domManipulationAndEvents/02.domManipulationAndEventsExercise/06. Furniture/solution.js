function solve() {
  const [inputTexRef, outputTextRef] = document.querySelectorAll('#container textarea');    //get the text areas   //both with deconstruction 
  const [generateBtnRefs, buyButtonRef] = document.querySelectorAll('#container button');   //get the buttons 

  const tableBodyRef = document.querySelector('.table tbody');
  generateBtnRefs.addEventListener('click', onGenerateHandler);                           //add the event listenr to the buy button
  buyButtonRef.addEventListener('click', onBuyHandler);

  function onGenerateHandler() {                                                     //create the button function 
    if (!inputTexRef.value) {                    //if the input is '', then return the function. because JSON.parse returns an error for a empty value
      return;
    }
    const inputArr = JSON.parse(inputTexRef.value);    //parses the input to JS readable array with objects 

    inputArr.forEach(element => {
      const tableRowEL = createTableRow(element);      //reach into the array for the objects, equal to the functions result 
      tableBodyRef.appendChild(tableRowEL);            //append the result to the tbody
    });
    inputTexRef.value = '';
  }

  function createTableRow(data) {
    const tr = document.createElement('tr');
    //this works as a single string in the browser, but it's like this due to softUni's system environment specifics
    tr.innerHTML = "<td>" + `<img src=${data.img}>` + "</td>" + "<td>" + data.name + "</td>" +
      "<td>" + data.price + "</td>" + "<td>" + data.decFactor + "</td>" + "<td>" + "<input type='checkbox'>" + "</td>";
    //--------------------------------

    return tr;    //return the tr 
  }

  function onBuyHandler() {
    const checkBoxes = Array.from(document.querySelectorAll('input'));    //get the checkboxes and turn them into an array
    const items = checkBoxes.filter(x => x.checked);                                         //filter the checkBoxes so only the checked are here

    const names = [];
    let totalPrice = 0;
    let sumDecFactor = 0;

    for (let el of items) {
      const trRef = el.parentElement.parentElement;
      const [imgTd, nameTd, priceTd, decFactorTd] = trRef.children;

      const name = nameTd.textContent;
      let price = priceTd.textContent;
      price = Number(price);    //parse the strind to a Number 

      let decFactor = decFactorTd.textContent;
      decFactor = Number(decFactor);

      names.push(name);
      totalPrice += price;
      sumDecFactor += decFactor;
    }
    let resultBuff = `Bought furniture: ` + `${names.join(", ")}\n`;
    resultBuff += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultBuff += `Average decoration factor: ${sumDecFactor / items.length}`

    outputTextRef.value = resultBuff;
  }
}