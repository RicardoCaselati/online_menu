import { compareSync } from 'bcryptjs';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import ILogin from '../Interfaces/ILogin';
import UserODM from '../Models/User.odm';

class LoginService {
   public async LoginServiceCreate(body: ILogin): Promise<{ type: number | null, message: string }> {
    const User = new UserODM();
    const userRegistred = await User.findOne({ email: body.email } as any);
    if (userRegistred) {
      return { type: 401, message: 'User already registered' };
    }
    const salt = 10;
    const password = body.password;
    const hash = bcrypt.hashSync(password, salt);
    const usertoSubmit: any = {
      name: body.name,
      email: body.email,
      password: hash,
    };
    const data = await User.create(usertoSubmit);

    if (!data || !compareSync(body.password, data.password)) {
      return { type: 401, message: 'Incorrect email or password' };
    }
    const { email, _id, name } = data;
    const token = jwt.sign({ email, id: _id, name }, process.env.JWT_SECRET as string);
    return { type: null, message: token };
  }

  public async LoginServiceFindOne(body: ILogin): Promise<{ type: number | null, message: string }> {
    const User = new UserODM();
    const data = await User.findOne({ email: body.email } as any);

    if (!data || !compareSync(body.password, data.password)) {
      return { type: 401, message: 'Incorrect email or password' };
    }

    const { email, _id, name } = data;
    const token = jwt.sign({ email, id: _id, name }, process.env.JWT_SECRET as string);
    return { type: null, message: token };
  }
};

export default LoginService;
