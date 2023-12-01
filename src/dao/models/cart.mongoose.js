import { Schema,model } from 'mongoose';

const cartSchema = new mongoose.Schema({
    _id: {type: String, require:true},
    products: [productSchema]
});

export const Cart = mongoose.model('Cart', cartSchema);
