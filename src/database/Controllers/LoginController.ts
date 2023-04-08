import { Request, Response } from 'express';
import LoginService from '../Services/LoginServices';
import loginJoiSchema from '../Validations/loginJoiSchema';

const LoginControllerCreate = async (req: Request, res: Response) => {
  const loginService = new LoginService();
  const { type, message } = await loginService.LoginServiceCreate(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
};

const LoginControllerFindOne = async (req: Request, res: Response) => {
  const { error } = loginJoiSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const loginService = new LoginService();
  const { type, message } = await loginService.LoginServiceFindOne(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
};


export {
  LoginControllerCreate,
  LoginControllerFindOne,
};