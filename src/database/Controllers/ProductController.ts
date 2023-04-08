import { Request, Response } from 'express';
import productService from '../Services/ProductService';


const ProductControllerFindAll = async (_req: Request, res: Response) => {
  const product = new productService();
  const listProducts = await product.findAll();
  if (!listProducts) return res.status(400).json({ message: 'Product not found!' });
  res.status(200).json(listProducts);
};

const ProductControllerFindById = async (req: Request, res: Response) => {
  const product = new productService();
  const { id } = req.params;
  const post = await product.ProductServiceFindById(id);
  if (!post) { res.status(404).json({ message: 'Product does not exist' })}
  res.status(200).json(post);
};

export { ProductControllerFindAll, ProductControllerFindById };