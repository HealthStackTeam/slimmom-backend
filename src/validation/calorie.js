import Joi from 'joi';

export const createCalorieSchema = Joi.object({
  weight: Joi.number().positive().min(20).max(400).required(),

  height: Joi.number().positive().min(50).max(250).required(),

  age: Joi.number().integer().min(0).max(120).required(),

  targetWeight: Joi.number().positive().min(0).max(400).required(),

  bloodType: Joi.string().valid('A', 'B', 'AB', 'O').required(),

  gender: Joi.string().valid('male', 'female').required(),
});
