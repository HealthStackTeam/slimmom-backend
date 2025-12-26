import { CalorieCollection } from '../db/models/calorie.js';
export const getCalorieUser = async (userId) => {
  const calorie = await CalorieCollection.findOne({ userId });
  return calorie;
};

export const addCalorieUser = async ({ userId, dailyCalorie, foods }) => {
  const calorie = await CalorieCollection.updateOne(
    { userId },
    {
      $set: {
        dailyCalorie,
        foods,
      },
    },
    { upsert: true },
  );
  return calorie;
};
