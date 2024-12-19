import express, { Request, Response, Router } from "express";
import { verifyJwt } from "./JWTHandler";
import { sendRpcRequest } from "../helper";

export const WalletRouter = (): Router => {
    const walletRouter: Router = express.Router();
  
    walletRouter.post("/create-wallet", verifyJwt, async (req: Request, res: Response): Promise<any> => {
      const { walletName } = req.body;
  
      if (!walletName) {
        return res.status(400).json({ error: "Wallet name is required" });
      }
  
      try {
        const result = await sendRpcRequest("createwallet", [walletName]);
        return res.status(200).json(result);
      } catch (error: any) {
        console.error("Error creating wallet:", error.response?.data?.error || error.message);
        return res.status(500).json({ error: "Error creating wallet" });
      }
    });
  
    return walletRouter;
  };