import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
export interface RequestWithToken extends Request {
  cookies: {
    refreshToken?: string;
  };
}

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  role: string;
}
export interface RequestWithPayload extends Request {
  id?: string;
  role?: string;
}