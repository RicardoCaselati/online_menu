import { Schema } from 'mongoose';

interface ILogin {
  id?: string,
  name: string,
  email: string,
  password: string,
  parent?: Schema.Types.ObjectId | null;
}

export default ILogin;