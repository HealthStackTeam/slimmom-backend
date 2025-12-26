import { calorieCalculator } from '../utils/calorieCalculator.js';
import { bloodTypeFunc } from '../utils/bloodType.js';
import { getProductsBlood } from '../services/products.js';
import { addCalorieUser, getCalorieUser } from '../services/calorie.js';

export const getCalorieController = async (req, res, next) => {
  const { weight, height, targetWeight, age, gender, bloodType } = req.body;

  const foods = await getProductsBlood(bloodTypeFunc(bloodType));

  const calorie = calorieCalculator(weight, height, targetWeight, age, gender);
  res.json({
    status: 200,
    message: `Calorie calculated`,
    data: {
      calorie: calorie,
      foods: foods,
    },
  });
};

export const setCaloriePrivateController = async (req, res, next) => {
  const { weight, height, targetWeight, age, gender, bloodType } = req.body;
  const userId = '123';

  const foods = await getProductsBlood(bloodTypeFunc(bloodType));

  const foodsArray = JSON.parse(JSON.stringify(foods)).flatMap(
    (food) => food.title,
  );
  const foodTitles = foodsArray.join(', ');

  const calorie = calorieCalculator(weight, height, targetWeight, age, gender);

  await addCalorieUser({
    dailyCalorie: calorie,
    userId: userId,
    foods: foodTitles,
  });

  res.json({
    status: 200,
    message: `Calorie calculated`,
    data: {
      calorie: calorie,
      foods: foods,
    },
  });
};

export const getCaloriePrivateController = async (req, res, next) => {
  const userId = '123';
  const data = await getCalorieUser(userId);

  res.json({
    status: 200,
    message: ``,
    data: data,
  });
};
