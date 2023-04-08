import AbstractODM from './AbstractODM';
import ICategory from '../Interfaces/ICategory';
import CategorySchema from '../Schemas/categorySchema';

class CategoryODM extends AbstractODM<ICategory> {
  constructor() {
    super(CategorySchema, 'Category');
  }
}

export default CategoryODM;