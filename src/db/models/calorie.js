import { Schema, model } from 'mongoose';

const calorieSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    dailyCalorie: {
      type: Number,
      required: true,
    },
    foods: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const CalorieCollection = model('calorie', calorieSchema);
