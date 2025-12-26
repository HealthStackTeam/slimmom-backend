import { Schema, model } from 'mongoose';

const calorieSchema = new Schema(
  {
    userId: {
      type: String,
      ref: 'users',
      required: false,
    },
    dailyCalorie: {
      type: Number,
    },
    foods: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const CalorieCollection = model('calorie', calorieSchema);
