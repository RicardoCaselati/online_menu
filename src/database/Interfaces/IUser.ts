import { Schema, Document } from 'mongoose';

interface IUser extends Document {
  _id?: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  parent?: Schema.Types.ObjectId | null;
}
export default IUser;