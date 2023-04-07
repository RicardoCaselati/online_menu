import { Document, Schema, model } from 'mongoose';
import IUser from '../Interfaces/IUser';

const userSchema = new Schema<IUser>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
});


export default model<IUser & Document>('User', userSchema);