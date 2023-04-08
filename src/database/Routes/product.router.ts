import { Router } from 'express';
import productController from '../Controllers/ProductController';

const routes = Router();

// to list every product
routes.get('/', productController);

// to create a new product
// routes.post('/', productController);

// to find a product by id
// routes.get('/:id', productController);

// to update a product by id
// routes.patch('/:id', productController);

// to delete a product by id
// routes.delete('/:id', productController);

export default routes;