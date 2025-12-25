import { Schema, model } from 'mongoose';

const productsSchema = new Schema();

export const ProductsCollection = model('products', productsSchema);
