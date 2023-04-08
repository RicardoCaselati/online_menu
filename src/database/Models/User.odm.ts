import AbstractODM from './AbstractODM';
import IUser from '../Interfaces/IUser';
import userSchema from '../Schemas/userSchema';
import { Document } from 'mongoose';

class UserODM extends AbstractODM<IUser & Document> {
  constructor() {
    super(userSchema, 'User');
  }
}

export default UserODM;
