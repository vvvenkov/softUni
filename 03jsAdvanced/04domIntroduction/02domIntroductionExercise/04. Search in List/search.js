function search() {
   const towns = Array.from(document.querySelectorAll("ul li"));
   const search = document.getElementById("searchText").value;

   let counter = 0;


   towns.forEach(el => {
      let text = el.textContent;
   
      if (text.includes(search)){
         el.style.textDecoration = "underline";
         el.style.textDecoration = "bold"
         counter++;
      } else {
         el.style.textDecoration = "none";
      }
   })
   document.getElementById("result").textContent = `${counter} matches found`
}