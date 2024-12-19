import mongoose from "mongoose";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const API_URL = process.env.API_URL || "";
const USERNAME = process.env.USERNAME || "";
const PASSWORD = process.env.PASSWORD || "";

export const connectToDatabase = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
  } catch (error) {
    console.error(error);
  }
};

export const sendRpcRequest = async (method: any, params: any[] = []) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        jsonrpc: "2.0",
        id: 1,
        method: method,
        params: params,
      },
      {
        auth: {
          username: USERNAME,
          password: PASSWORD,
        },
      }
    );
    return response.data.result;
  } catch (error: any) {
    console.error("Error:", error.response?.data?.error || error.message);
  }
};
