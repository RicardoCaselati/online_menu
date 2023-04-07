import { Schema } from 'mongoose';
import IMenu from '../Interfaces/IMenu';

const menuSchema = new Schema<IMenu>({
  name: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default menuSchema;