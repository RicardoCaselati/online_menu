import { model, Document } from 'mongoose';
import IUser from '../Interfaces/IUser';
import UserSchema from '../Schemas/userSchema';

const userModel = model<IUser & Document>('User', UserSchema);

export default userModel;
