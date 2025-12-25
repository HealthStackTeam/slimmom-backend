import { Router } from 'express';

import { getProductsController } from '../controllers/products.js';

const router = Router();

router.get('/:search', getProductsController);

export default router;
