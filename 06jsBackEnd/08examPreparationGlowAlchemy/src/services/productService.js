import Product from "../models/Product.js"

export default {
    async getAll() {
        return Product.find();
    },
    getOne(productId) {
        return Product.findById(productId);
    },
    create(productData, ownerId) {
        return Product.create({ ...productData, owner: ownerId })
    }
}