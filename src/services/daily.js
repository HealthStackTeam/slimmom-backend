import { DiaryCollection } from '../db/models/diaries.js';

export const getProductsUser = async () => {
  const products = await DiaryCollection.find();
  return products;
};

export const addProductUser = async (payload) => {
  const product = await DiaryCollection.create(payload);
  return product;
};

export const delProductUser = async (dailyId) => {
  const product = await DiaryCollection.findOneAndDelete({
    _id: dailyId,
  });
  return product;
};
