import { Schema, model } from 'mongoose';

const diarySchema = new Schema(
  {
    product: {
      type: Object,
      ref: 'product',
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const DiaryCollection = model('diaries', diarySchema);
