import { Schema, model } from 'mongoose';

const diarySchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
    },
    weight: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
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
