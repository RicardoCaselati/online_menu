import { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean
});

export default userSchema;