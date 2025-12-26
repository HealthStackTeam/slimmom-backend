import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getCalorieController,
  setCaloriePrivateController,
  getCaloriePrivateController,
} from '../controllers/calorie.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createCalorieSchema } from '../validation/calorie.js';

const router = Router();

router.post('/public', validateBody(createCalorieSchema), getCalorieController);

router.post(
  '/private',
  validateBody(createCalorieSchema),
  authenticate,
  ctrlWrapper(setCaloriePrivateController),
);
router.get('/private', authenticate, ctrlWrapper(getCaloriePrivateController));

export default router;
