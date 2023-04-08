
import IMenu from '../Interfaces/IMenu';
import MenuODM from '../Models/Menu.odm';

class ProductService {
  public async findAll(): Promise<IMenu[]> {
    const Menu = new MenuODM();
    const listProduct = await Menu.find();   
    return listProduct;
  }

  public async ProductServiceFindById(id: string): Promise<IMenu> {
    const Menu = new MenuODM();
    const listProductById = await Menu.findById(id);    
    return listProductById;
  }
};

export default ProductService;
