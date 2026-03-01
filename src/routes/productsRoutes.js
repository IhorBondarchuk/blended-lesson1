import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductbyId,
  updateProduct,
} from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/products', getAllProducts);

productsRouter.get('/products/:productId', getProductbyId);
productsRouter.post('/products', createProduct);
productsRouter.patch('/products/:productId', updateProduct);
productsRouter.delete('/products/:productId', deleteProduct);

export default productsRouter;
