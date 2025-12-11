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
    async like(productId, userId) {
        const product = await this.getOne(productId);

        if (!product) throw new Error('Product not found');

        // Prevent owners from liking their own product
        if (product.owner.equals(userId)) {
            throw new Error('Owners cannot like their own products!');
        }

        // Prevent duplicate likes
        if (product.likedList.some(id => id.equals(userId))) {
            throw new Error('You already liked this property!');
        }

        // Add user to likedList
        product.likedList.push(userId);

        // Save and return updated product
        return product.save();
    },
    async delete(productId, userId) {
        const product = await this.getOne(productId);

        if (!product.owner.equals(userId)) {
            throw new Error('Only the owner can delete this product!')
        };

        return Product.findByIdAndDelete(productId);
    },
    async edit(productId, productData, userId) {
        const product = await Product.findById(productId);

        if (!product.owner.equals(userId)) {
            throw new Error('You need to be the owner of this product in order to edit it!');
        }

        const { type, location, area, image, price, contact, description } = productData;

        return Product.findByIdAndUpdate(
            productId,
            { type, location, area, image, price, contact, description },
            { runValidators: true, new: true }
        );
    }

}