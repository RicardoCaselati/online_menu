import { Router } from 'express';
import * as  LoginController from "../Controllers/LoginController";

const routes = Router();

routes.post('/new-user', LoginController.LoginControllerCreate);

routes.post('/', LoginController.LoginControllerFindOne);

export default routes;