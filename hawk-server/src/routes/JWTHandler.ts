import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/dotenv";

export const signJwt = (user_id: string): string | false => {
  const expirationTime = "1h";
  try {
    const token = jwt.sign({ sub: user_id }, config.JWT_SECRET || "", {
      expiresIn: expirationTime,
    });
    return token || false;
  } catch (error) {
    console.error("Error signing JWT:", error);
    return false;
  }
};

export const verifyJwt = (req: Request, res: Response, next: NextFunction): any | void => {
  const authorization = req.header("authorization");
  const token = authorization ? authorization.split("Bearer ")[1] : undefined;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  jwt.verify(token, process.env.SECRET || "", (err, payload) => {
    if (err || !payload || typeof payload !== "object" || !("sub" in payload)) {
      return res.status(401).send("Unauthorized");
    }
    (req as any).user = payload;
    next();
  });
};