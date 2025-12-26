import { Router } from 'express';

import {
  getDailyFoodController,
  addDailyFoodController,
  delDailyFoodController,
} from '../controllers/diary.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getDailyFoodController));
router.post('/', ctrlWrapper(addDailyFoodController));
router.delete('/', ctrlWrapper(delDailyFoodController));

export default router;
