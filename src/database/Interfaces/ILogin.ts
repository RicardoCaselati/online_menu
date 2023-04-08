import { Schema } from 'mongoose';

interface ILogin {
  id?: string,
  name: string,
  email: string,
  password: string,
}

export default ILogin;