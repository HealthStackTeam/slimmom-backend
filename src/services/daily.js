import { DiaryCollection } from '../db/models/diaries.js';

export const getProductsUser = async (userId, date) => {
  const products = await DiaryCollection.find({ userId, date });
  return products;
};

export const addProductUser = async (payload) => {
  const product = await DiaryCollection.create(payload);
  return product;
};

export const delProductUser = async (dailyId, userId) => {
  const product = await DiaryCollection.findOneAndDelete({
    _id: dailyId,
    userId: userId,
  });
  return product;
};
