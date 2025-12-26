import Joi from 'joi';

export const createDiarySchema = Joi.object({
  weight: Joi.number().min(0).max(400),
  date: Joi.string(),
  productId: Joi.string(),
});

export const delDiarySchema = Joi.object({
  dailyId: Joi.string(),
});

export const getDiarySchema = Joi.object({
  date: Joi.string(),
});
