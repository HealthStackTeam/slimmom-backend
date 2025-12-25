import { Router } from 'express';

import { getCalorieController } from '../controllers/calorie.js';

const router = Router();

router.post('/public', getCalorieController);

export default router;
