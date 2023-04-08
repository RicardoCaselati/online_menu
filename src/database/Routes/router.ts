import { Router } from 'express';
import validateToken from '../middlewares/auth.middleware'
import loginRouter from './login.router';
import category from './category.router';
import product from './product.router';

const routes = Router();

// public route
routes.use('/auth/login', loginRouter);

// Private routes - require authentication (token) to be done.
routes.use('/category', validateToken, category);
routes.use('/product', validateToken, product);

export default routes;