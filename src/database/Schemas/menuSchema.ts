import { Schema } from 'mongoose';

const menuSchema = new Schema({
  categories: [{ type: String }],
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default menuSchema;

