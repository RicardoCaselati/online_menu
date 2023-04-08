import { model, Document } from 'mongoose';
import IMenu from '../Interfaces/IMenu';
import MenuSchema from '../Schemas/menuSchema';

const menuModel = model<IMenu & Document>('Menu', MenuSchema);

export default menuModel;