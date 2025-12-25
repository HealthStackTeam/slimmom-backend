import { Schema, model } from 'mongoose';

const calorieSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    height: {
      type: Number,
      required: true,
      min: 100,
      max: 250,
    },
    weight: {
      type: Number,
      required: true,
      min: 30,
      max: 300,
    },
    targetWeight: {
      type: Number,
      required: true,
      min: 30,
      max: 300,
    },

    bloodGroup: {
      type: String,
      enum: ['A', 'B', 'AB', 'O'],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const CalorieCollection = model('calorie', calorieSchema);
