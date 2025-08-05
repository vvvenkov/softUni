function solve() {
  const text = document.getElementById("text").value;
  const namingConvention = (document.getElementById("naming-convention").value).toLowerCase();
  let string = "";
  let arr = text.split(" ");

  if (namingConvention === "pascal case") {
    for (let el of arr) {
      string += el[0].toUpperCase();
      string += el.substring(1).toLowerCase();
    }
  } else if (namingConvention === "camel case") {
    arr.forEach((element, index) => {
      if (index === 0) {
        string += element.toLowerCase();
      } else {
        string += element[0].toUpperCase();
        string += element.substring(1).toLowerCase();
      }
    });
  } else {
    string = "Error!";
  }
  debugger
  document.getElementById("result").textContent = string;
}
