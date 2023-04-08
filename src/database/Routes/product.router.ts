import { Router } from 'express';
import { ProductControllerFindAll, ProductControllerFindById } from '../Controllers/ProductController';


const routes = Router();

// to list every product
routes.get('/', ProductControllerFindAll);

// to create a new product
// routes.post('/', productController);

// to find a product by id
routes.get('/:id', ProductControllerFindById);

// to update a product by id
// routes.patch('/:id', productController);

// to delete a product by id
// routes.delete('/:id', productController);

export default routes;