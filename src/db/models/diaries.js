import { Schema, model } from 'mongoose';

const diarySchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const DiaryCollection = model('diaries', diarySchema);
