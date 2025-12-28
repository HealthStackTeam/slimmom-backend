import { Router } from 'express';

import {
  getDailyFoodController,
  addDailyFoodController,
  delDailyFoodController,
} from '../controllers/diary.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  getDiarySchema,
  createDiarySchema,
  delDiarySchema,
} from '../validation/diary.js';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  validateBody(getDiarySchema),
  ctrlWrapper(getDailyFoodController),
);
router.post(
  '/add',
  validateBody(createDiarySchema),
  ctrlWrapper(addDailyFoodController),
);
router.delete(
  '/',
  validateBody(delDiarySchema),
  ctrlWrapper(delDailyFoodController),
);

export default router;
