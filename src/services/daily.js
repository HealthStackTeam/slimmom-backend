import { DiaryCollection } from '../db/models/diaries.js';
import { getSearchIdProduct } from '../services/products.js';

export const getProductsUser = async (payload) => {
  const productList = await DiaryCollection.find(payload);
  const products = await Promise.all(
    productList.map(async ({ _id, date, weight, productId }) => {
      const product = await getSearchIdProduct(productId.valueOf());
      return {
        ...{ _id, date, weight },
        product,
      };
    }),
  );

  return products;
};

export const addProductUser = async (payload) => {
  const product = await DiaryCollection.findOneAndUpdate(
    {
      date: payload.date,
      productId: payload.productId,
      userId: payload.userId,
    },
    { $inc: { weight: payload.weight } },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    },
  );
  return product;
};

export const delProductUser = async (dailyId, userId) => {
  const product = await DiaryCollection.findOneAndDelete({
    _id: dailyId,
    userId: userId,
  });
  return product;
};
