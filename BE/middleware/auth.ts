import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const secretKey = process.env.JWT_SECRET_KEY
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      throw new Error()
    }
    const verified = jwt.verify(token, secretKey);
    if (!verified) {
      throw new Error()
    }

    next()
  } catch (err) {
    res.json({
      status: 401,
      message: "Please Authenticate!",
    }).send()
  }
}