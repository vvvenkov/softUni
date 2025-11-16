import Product from "../models/Product.js"

export default {
    async getAll() {
        return Product.find();
    },
    getLatest() {
        return Product.find().sort({ _id: -1 }).limit(3);
    },
    getOne(productId) {
        return Product.findById(productId);
    },
    create(productData, ownerId) {
        const ingredients = productData.ingredients.split(', ')

        return Product.create({ ...productData, ingredients, owner: ownerId })
    },
    async recommend(productId, userId) {
        const product = await this.getOne(productId);

        // Check if owner
        if (product.owner.equals(userId)) {
            throw new Error('Owners cannot recommend their own products!')
        }

        product.recommends.push(userId);

        return product.save();

        // return Product.findOneAndUpdate(productId, { $push: { recommends: userId } })
    }

}