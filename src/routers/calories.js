import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getCalorieController,
  setCaloriePrivateController,
  getCaloriePrivateController,
} from '../controllers/calorie.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post('/public', getCalorieController);

router.post('/private', authenticate, ctrlWrapper(setCaloriePrivateController));
router.get('/private', authenticate, ctrlWrapper(getCaloriePrivateController));

export default router;
