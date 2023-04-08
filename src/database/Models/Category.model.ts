import { model, Document } from 'mongoose';
import ICategory from '../Interfaces/ICategory';
import CategorySchema from '../Schemas/categorySchema';

const categoryModel = model<ICategory & Document>('Category', CategorySchema);

export default categoryModel;