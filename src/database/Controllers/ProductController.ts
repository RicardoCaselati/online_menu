import { Request, Response } from 'express';
import productService from '../Services/ProductService';

const ProductControllerFindAll = async (_req: Request, res: Response) => {
  const product = new productService();
  const listProducts = await product.ProductServiceFindAll();
  if (!listProducts) return res.status(400).json({ message: 'Product not found!' });
  res.status(200).json(listProducts);
};

const ProductControllerCreateProduct = async (req: Request, res: Response) => {
  const product = new productService();
  const listProducts = await product.ProductServiceCreate(req.body);
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

const ProductControllerUpdateById = async (req: Request, res: Response) => {
  const product = new productService();
  const { id } = req.params;
  const postUpdated = await product.ProductServiceUpdateById(id, req.body);

  if (postUpdated) {
      const updatedObj = await product.ProductServiceFindById(id);
      return res.status(200).json(updatedObj);
  }

  return res.status(404).json({ message: `Post ${id} não encontrado` });
};

const ProductControllerDeleteById = async (req: Request, res: Response) => {
  const product = new productService();
  const { id } = req.params;
  const post = await product.ProductServiceDeleteById(id);
  if (!post) {
    return res.status(404).json({ message: 'Product does not exist' });
  }
  return res.status(200).json(post);
};



export {
  ProductControllerFindAll,
  ProductControllerCreateProduct,
  ProductControllerFindById,
  ProductControllerUpdateById,
  ProductControllerDeleteById
};