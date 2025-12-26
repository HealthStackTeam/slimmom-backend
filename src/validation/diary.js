import Joi from 'joi';

export const createDiarySchema = Joi.object({
  weight: Joi.number().min(0).max(400).required(),
  date: Joi.string().required(),
  productId: Joi.string().required(),
});

export const delDiarySchema = Joi.object({
  dailyId: Joi.string().required(),
});

export const getDiarySchema = Joi.object({
  date: Joi.string().required(),
});
