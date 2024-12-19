import mongoose, { Model } from "mongoose";
import IUser from "../types/IUser";

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  wallets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
    },
  ],
}, { timestamps: true });

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema, "users");

export default User;