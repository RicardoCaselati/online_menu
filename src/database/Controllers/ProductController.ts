import { Request, Response } from 'express';
import productService from '../Services/ProductService';


const ProductControllerFindAll = async (_req: Request, res: Response) => {
  const product = await new productService();
  const listProducts = await product.findAll();
  if (!listProducts) return res.status(400).json({ message: 'Product not found!' });
  res.status(200).json(listProducts);
};

export default ProductControllerFindAll;