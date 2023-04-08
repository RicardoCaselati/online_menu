import { Request as ExpressRequest } from 'express';

interface Request extends ExpressRequest {
  user: {
    email: string;
    id: string;
    name: string;
  };
}

export default Request