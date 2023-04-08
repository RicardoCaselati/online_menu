interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  iat?: number;
}

export default IUser;