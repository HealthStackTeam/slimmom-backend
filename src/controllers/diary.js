import {
  getProductsUser,
  addProductUser,
  delProductUser,
} from '../services/daily.js';

export const getDailyFoodController = async (req, res, next) => {
  const foods = await getProductsUser();

  res.json({
    status: 200,
    message: `Successfully`,
    data: foods,
  });
};

export const addDailyFoodController = async (req, res, next) => {
  const food = await addProductUser({ ...req.body });

  res.json({
    status: 201,
    message: `Product Added`,
    data: food,
  });
};

export const delDailyFoodController = async (req, res, next) => {
  const { dailyId } = req.body;

  const food = await delProductUser(dailyId);

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
