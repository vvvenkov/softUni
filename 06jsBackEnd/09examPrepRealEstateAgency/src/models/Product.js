import { model, Schema, Types } from 'mongoose';

const productSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likedList: [{
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