import Joi from 'joi';

export const createDiarySchema = Joi.object({
  weight: Joi.number().min(0).required(),
  date: Joi.string()
    .required()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .messages({
      'string.pattern.base': 'date must be in YYYY-MM-DD format',
      'string.empty': 'date is required',
    }),
  productId: Joi.string().required(),
});

export const delDiarySchema = Joi.object({
  dailyId: Joi.string().required(),
});

export const getDiarySchema = Joi.object({
  date: Joi.string()
    .required()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .messages({
      'string.pattern.base': 'date must be in YYYY-MM-DD format',
      'string.empty': 'date is required',
    }),
});
