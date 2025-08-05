function solve() {
 const input = document.getElementById("input");
 let output = document.getElementById("output");

 let paragraph = input.value.split(".");
 let currentParagraph = "";
 let counter = 0;

 for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i].length < 1) {
   continue;
  }
  currentParagraph += `<p>`;
  for (let y = 0; y < 3; y++) {
   currentParagraph += paragraph[i];
   i++;
   if (i >= paragraph.length) {
    break;
   }
   if (y !== 3) {
    currentParagraph += ".";
   }
  }
  currentParagraph += `</p>`;
  output.innerHTML += currentParagraph;
  currentParagraph = "";
  i--
 }
}