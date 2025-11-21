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
        return Product.create({ ...productData, owner: ownerId })
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
    },
    async delete(productId, userId) {
        const product = await this.getOne(productId);

        if (!product.owner.equals(userId)) {
            throw new Error('Only the owner can delete this product!')
        };

        return Product.findByIdAndDelete(productId);
    },
    async edit(productId, productData, userId) {
        // Check if owner
        const product = await Product.findById(productId);

        if (!product.owner.equals(userId)) {
            throw new Error('You need to be the owner of this product in order to edit it!')
        }

        // Edit product
        return Product.findByIdAndUpdate(productId, productData, { runValidators: true });
    }
}