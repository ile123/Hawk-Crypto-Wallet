import { ObjectId } from "mongoose";
import IAddress from "./IAddress";

type IWallet = {
  user: ObjectId;
  mnemonic: string;
  addresses: IAddress[];
  createdAt: Date;
  updatedAt: Date;
};

export default IWallet;
