import { model, Schema, Types } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    skin: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    benefits: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    recommends: [{
        type: Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },


});

const Product = model('Product', productSchema);

export default Product;