import { ObjectId } from "mongoose";

type IUser = {
  email: string;
  password: string;
  wallets: ObjectId[];
  createdAt: Date;
  updatedAt: Date;
};

export default IUser;
