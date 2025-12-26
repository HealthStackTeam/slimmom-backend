import { getProductsBlood, getSearchProducts } from '../services/products.js';

export const getProductsBloodController = async (req, res, next) => {
  const data = await getProductsBlood();
  res.json({
    status: 200,
    message: 'Successfully',
    data: data,
  });
};

export const getProductsController = async (req, res, next) => {
  const search = req.query.search;
  const data = await getSearchProducts(search);
  res.json({
    status: 200,
    message: 'Successfully',
    data: data,
  });
};
