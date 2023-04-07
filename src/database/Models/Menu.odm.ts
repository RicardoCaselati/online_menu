import AbstractODM from './AbstractODM';
import IMenu from '../Interfaces/IMenu';
import MenuSchema from '../Schemas/menuSchema';

class MenuODM extends AbstractODM<IMenu> {
  constructor() {
    super(MenuSchema, 'Menu');
  }
}

export default MenuODM;