import { DiaryCollection } from '../db/models/diaries.js';

export const getProductsUser = async (payload) => {
  const productList = await DiaryCollection.find(payload);
  return productList;
};

export const addProductUser = async (payload) => {
  const product = await DiaryCollection.findOneAndUpdate(
    {
      date: payload.date,
      product: payload.product,
      userId: payload.userId,
    },
    { $inc: { weight: payload.weight, calories: payload.calories } },
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
