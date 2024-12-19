import mongoose, { Schema, Model } from "mongoose";
import IWallet from "../types/IWallet";

const walletSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mnemonic: {
      type: String,
      required: true,
    },
    addresses: [
      {
        address: { type: String, required: true },
        privateKey: { type: String, required: true },
        qrCode: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Wallet: Model<IWallet> = mongoose.model<IWallet>(
  "Wallet",
  walletSchema,
  "wallets"
);

export default Wallet;
