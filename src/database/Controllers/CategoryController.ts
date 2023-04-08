import { Request, Response } from 'express';
import categoryService from '../Services/CategoryService';


const categoryController = async (_req: Request, res: Response) => {
  const category = await new categoryService();
  const listCategories = await category.findAll();
  if (!listCategories) return res.status(400).json({ message: 'Category not found!' });
  res.status(200).json(listCategories);
};

export default categoryController;
