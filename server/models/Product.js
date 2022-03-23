import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: String,
        required: true,
        trim: true
    },
    productImage: {
        type: String,
        required: true,
        trim: true
    }
})

export default model('Product', productSchema)