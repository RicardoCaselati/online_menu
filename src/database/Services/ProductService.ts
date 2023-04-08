import IMenu from '../Interfaces/IMenu';
import MenuODM from '../Models/Menu.odm';

class ProductService {
  public async ProductServiceFindAll(): Promise<IMenu[]> {
    const Menu = new MenuODM();
    const listProduct = await Menu.find();
    return listProduct;
  }

  public async ProductServiceCreate(product: { categories: string[], name: string, qty: number, price: number }): Promise<IMenu> {
    const Menu = new MenuODM();
    const productCreated = await Menu.create(product);
    return productCreated;
  }

  public async ProductServiceFindById(id: string): Promise<IMenu> {
    const Menu = new MenuODM();
    const listProductById = await Menu.findById(id);
    return listProductById;
  }

  public async ProductServiceUpdateById(id: string, product: IMenu): Promise<IMenu> {
    const Menu = new MenuODM();
    const updatedProduct = await Menu.findOneAndUpdate(
      id,
      product,
      { new: true }
    );
    return updatedProduct;
  }
  
  public async ProductServiceDeleteById(id: string): Promise<IMenu> {
    const Menu = new MenuODM();
    const listProductById = await Menu.delete(id);
    return listProductById;
  }
};

export default ProductService;
