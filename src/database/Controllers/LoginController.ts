import { Request, Response } from 'express';
import loginService from '../Services/LoginServices';
import loginJoiSchema from '../Validations/loginJoiSchema';

const loginController = async (req: Request, res: Response) => {
  const { error } = loginJoiSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const loginServiceInstance = new loginService();
  const { type, message } = await loginServiceInstance.findOne(req.body);
  
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
};


export default loginController;