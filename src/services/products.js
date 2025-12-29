import { ProductsCollection } from '../db/models/product.js';

export const getProductsBlood = async (bloodType) => {
  const products = await ProductsCollection.aggregate([
    {
      $match: {
        [`groupBloodNotAllowed.${bloodType}`]: true,
      },
    },
    {
      $sample: { size: 4 },
    },
  ]);
  return products;
};

export const getSearchProducts = async (search) => {
  const products = await ProductsCollection.find().where('title').regex(search);
  return products;
};

export const getSearchIdProduct = async (productId) => {
  const product = await ProductsCollection.findOne({
    _id: productId,
  });
  return product;
};
