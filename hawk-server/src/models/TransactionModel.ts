import mongoose, { Model } from "mongoose";
import ITransaction from "../types/ITransaction";
import { TransactionStatus, TransactionType } from "../types/enum/TransactionEnums";

const transactionSchema = new mongoose.Schema(
  {
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
      required: true,
    },
    transactionId: { type: String, unique: true, required: true },
    type: { type: String, enum: TransactionType, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: TransactionStatus,
      default: TransactionStatus.PENDING,
    },
  },
  { timestamps: true }
);

const Transaction: Model<ITransaction> = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema,
  "transactions"
);

export default Transaction;
