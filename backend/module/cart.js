import mongoose from 'mongoose';

export const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 10,
        unique: true
    },
    dsc: {
        type: String,
        required: true,
        min: 10,
        max: 50,
        unique: true
    },
    img: {
        type: String,
        required: true,
        unique: true
    },
    pricey: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const postCart = mongoose.model('postCart', cartSchema)

export default postCart
