import { ProductsCollection } from '../db/models/product.js';

export const getProductsBlood = async (bloodType) => {
  const products = await ProductsCollection.find({
    [`groupBloodNotAllowed.${bloodType}`]: true,
  }).limit(4);
  return products;
};

export const getSearchProducts = async (search) => {
  const products = await ProductsCollection.find().where('title').regex(search);
  return products;
};
