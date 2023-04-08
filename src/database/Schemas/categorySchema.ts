import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
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
