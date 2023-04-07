import mongoose from 'mongoose';
import Menu from '../Models/Menu.model';
import menuData from './menuData';
import User from '../Models/User.model';
import userData from './userData';

const seedDatabase = async (
  connection: mongoose.Connection,
) => {
  try {
    await Menu.insertMany(menuData);
    console.log('Menu added to database');

    await User.insertMany(userData);
    console.log('User added to database');
  } catch (error) {
    console.error('Error connecting to database', error);
  } finally {
    mongoose.connection.close();
    console.log('Connection closed');
  }
};

export default seedDatabase;
