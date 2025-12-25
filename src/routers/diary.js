import { Router } from 'express';

import {
  getDailyFoodController,
  addDailyFoodController,
  delDailyFoodController,
} from '../controllers/diary.js';

const router = Router();

router.get('/', getDailyFoodController);
router.post('/', addDailyFoodController);
router.delete('/', delDailyFoodController);

export default router;
