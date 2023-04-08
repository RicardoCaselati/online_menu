import { Router } from 'express';
import * as  LoginController from "../Controllers/LoginController";

const routes = Router();

// to create a new user
routes.post('/new-user', LoginController.LoginControllerCreate);

// handle login requests
routes.post('/', LoginController.LoginControllerFindOne);

export default routes;