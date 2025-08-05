function extractText() {
    const list = document.getElementById("items");
    const itemArray = Array.from(list.children);


    const result = itemArray
        .map(li => li.textContent)    //за всеки li елент ми върни li.textContent
        .join("\n");                        //и го конкатенирай на нов ред

    const output = document.getElementById("result");
    output.value = result;
}