import { Response, Request } from "express";

export const registerUser = async (req: Request, res: Response) => { 
    console.log(req)
    res.send({ user: "user._id" })
}

export const loginUser = async (req: Request, res: Response) => { 
    console.log(req)
    res.send({ user: "user._id" })
}