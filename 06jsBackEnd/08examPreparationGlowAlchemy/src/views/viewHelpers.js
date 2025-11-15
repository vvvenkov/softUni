export default {
    setTitle(title) {
        this.pageTittle = title;
    },
    showIngredients(ingredients) {
        return ingredients.replaceAll(',', " / ");
    }
}