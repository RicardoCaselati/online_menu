import { Router } from 'express';
import loginController from '../Controllers/LoginController';

const routes = Router();

routes.post('/', loginController);

// routes.get(
//   '/',
//   (req, res, next) => new CarController(req, res, next).getAll(),
// );

// routes.get(
//   '/:id',
//   (req, res, next) => new CarController(req, res, next).getById(),
// );

// routes.put(
//   '/:id',
//   (req, res, next) => new CarController(req, res, next).updateById(),
// );

export default routes;