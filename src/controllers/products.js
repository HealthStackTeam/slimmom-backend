import { getSearchProducts } from '../services/products.js';

export const getProductsController = async (req, res, next) => {
  const search = req.query.search;
  const data = await getSearchProducts(search);
  res.json({
    status: 200,
    message: 'Successfully',
    data: data,
  });
};
