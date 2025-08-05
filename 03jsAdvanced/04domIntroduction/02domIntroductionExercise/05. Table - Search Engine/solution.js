function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.getElementById("searchField");
   const arr = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      for (let el of arr){
         if (el.textContent.toLowerCase().includes(input.value.toLowerCase().trim())){
            el.classList.add("select");
         } else {
            el.classList.remove("select");
         }
      }
      input.value = "";
   }
}