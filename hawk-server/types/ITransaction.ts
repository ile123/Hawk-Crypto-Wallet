import { ObjectId } from "mongoose";
import { TransactionStatus, TransactionType } from "./enum/TransactionEnums";

type ITransaction = {
  wallet: ObjectId;
  transactionId: string;
  type: TransactionType;
  address: string;
  amount: number;
  status: TransactionStatus;
  createdAt: Date;
  updatedAt: Date;
}

export default ITransaction;