import { DiaryCollection } from '../db/models/diaries.js';

export const getProductsUser = async (payload) => {
  const products = await DiaryCollection.find(payload);
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
