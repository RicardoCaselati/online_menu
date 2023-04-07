import AbstractODM from './AbstractODM';
import IUser from '../Interfaces/IUser';
import UserSchema from '../Schemas/userSchema';

class UserODM extends AbstractODM<IUser> {
  constructor() {
    super(UserSchema, 'User');
  }
}

export default UserODM;