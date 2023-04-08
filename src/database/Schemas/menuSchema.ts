import { Schema, model } from 'mongoose';

const menuSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  categories: [{ type: String }],
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default menuSchema;