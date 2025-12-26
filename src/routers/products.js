import { Router } from 'express';

import { getProductsController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getProductsController));

export default router;
