import ICategory from '../Interfaces/ICategory';
import CategoryODM from '../Models/Category.odm';

class CategoryService {

  public async findAll(): Promise<ICategory[]> {
    const Category = new CategoryODM();
    const listCategory = await Category.find();   
    return listCategory;
  }
};

export default CategoryService;
