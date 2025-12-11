export default {
    setTitle(title) {
        this.pageTittle = title;
    },
    showProperties(properties) {
        properties = properties.join(', ');

        return properties.replaceAll(',', " / ");
    }
}