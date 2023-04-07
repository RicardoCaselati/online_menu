import { Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  image: String,
  isAdmin: Boolean,
});

export default userSchema;