export default {
    setTitle(title) {
        this.pageTittle = title;
    },
    showIngredients(ingredients) {
        ingredients = ingredients.join(', ');

        return ingredients.replaceAll(',', " / ");
    }
}