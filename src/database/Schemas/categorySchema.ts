import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    ref: 'Category',
  },
});

export default CategorySchema;
