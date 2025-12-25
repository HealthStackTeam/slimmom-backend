import { Router } from 'express';
import authRouter from './auth.js';
// routers klasöründe açtığınız diğer routerları da buraya import edin
// calories, diary, products

import caloriesRouter from './calories.js';
import diaryRouter from './diary.js';
// import productsRouter from './products.js';

const router = Router();

// İlgili route'ları burada kullanın authRouter örneğinde olduğu gibi

router.use('/auth', authRouter);
router.use('/calories', caloriesRouter);
router.use('/diary', diaryRouter);
// router.use('/products', productsRouter);

export default router;
