function editElement(ref, match, replacer)  {
    let text = ref.textContent;

    text = text.replace(match, replacer);

    ref.textContent = text;
}