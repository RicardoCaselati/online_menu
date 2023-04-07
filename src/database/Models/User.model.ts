import { Document, Schema, model } from 'mongoose';
import IUser from '../Interfaces/IUser';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin:  { type: Boolean, required: true },
});

export default model<IUser & Document>('User', userSchema);