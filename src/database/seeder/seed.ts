import mongoose from 'mongoose';
import User from '../Models/User.model';
import userData from './userData';
import Menu from '../Models/Menu.model';
import menuData from './menuData';
import Category from '../Models/Category.model';
import categoryData from './categoryData';

const seedDatabase = async (connection: mongoose.Connection) => {
  try {
    const menus = menuData.map(menu => ({
      ...menu,
      categories: menu.categories.map(cat => mongoose.Types.ObjectId.isValid(cat) ? new mongoose.Types.ObjectId(cat) : null),

    }));

    await Menu.insertMany(menus);
    await User.insertMany(userData);
    await Category.insertMany(categoryData);
  } catch (error) {
    console.error('Error inserting data', error);
  }
};

export default seedDatabase;