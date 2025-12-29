import {
  getProductsUser,
  addProductUser,
  delProductUser,
} from '../services/daily.js';

export const getDailyFoodController = async (req, res, next) => {
  const userId = req.user.id;
  const { date } = req.body;
  const foods = await getProductsUser({ userId, date });

  res.json({
    status: 200,
    message: `Successfully`,
    data: foods,
  });
};

export const addDailyFoodController = async (req, res, next) => {
  const userId = req.user.id;
  const food = await addProductUser({ ...req.body, userId });

  res.json({
    status: 201,
    message: `Product Added`,
    data: food,
  });
};

export const delDailyFoodController = async (req, res, next) => {
  const { dailyId } = req.body;
  const userId = req.user.id;

  const food = await delProductUser(dailyId, userId);

  if (!food) {
    res.json({
      status: 404,
      message: `Product Not Found`,
    });
    return;
  }

  res.json({
    status: 204,
    message: `Product Deleted`,
  });
};
