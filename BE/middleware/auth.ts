import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export interface CustomRequest extends Request {
 token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
const secretKey = process.env.JWT_SECRET_KEY;
 try {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
     throw new Error();
   }

   console.log(token, secretKey)
     const decoded = jwt.verify(token, secretKey);
   (req as CustomRequest).token = decoded;

   next();
 } catch (err) {
    res.json({
        status: 401,
        message: "Please Authenticate!",
      }).send()
 }
};