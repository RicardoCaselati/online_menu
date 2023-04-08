import { Router } from 'express';
import categoryController from '../Controllers/CategoryController';

const routes = Router();

// to list every category
routes.get('/', categoryController);

export default routes;