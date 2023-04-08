import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IUser from '../Interfaces/IUser'

const { JWT_SECRET } = process.env;

interface TokenPayload {
  email: string;
  id: string;
  name: string;
  iat?: number;
}

interface RequestWithUser extends Request {
  user?: IUser;
}

const validateToken = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(authorization, JWT_SECRET) as TokenPayload;
    req.user = {
      _id: payload.id,
      name: payload.name,
      email: payload.email,
      password: '',
      ...payload,
    } as IUser;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validateToken;
