import { Response, Request } from "express"
import User from "../models/user.model"
import jwt from 'jsonwebtoken'

export const registerUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body
  const emailAlreadyExists = await User.findOne({ email })
  if (emailAlreadyExists) {
    res.json({
      status: 400,
      message: "A User already exists with similar email address!",
    })
    return
  }
  const newUser = new User({
    name: name,
    email: email,
    password: password,
  })
  await newUser.save().catch((err) => {
    console.log(err)
    res.json({
      status: 500,
      message: "Oops! Something went wrong.",
    })
    return
  })
  res.json({
    status: 200,
    message: "Registered successfully! Please check your email.",
  })
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email })
  if (!user) {
    res.json({
      status: 401,
      message: "User does not exits!",
    })
    return
  }
  if (user.password && user.password != password) {
    res.json({
      status: 401,
      message: "Wrong Password!",
    })
    return
  }
  const jwtSecretKey = process.env.JWT_SECRET_KEY
  const data = {
      time: Date(),
      userId: user.id,
      userName: user.name,
      userEmail: user.email
  }

  const token = jwt.sign(data, jwtSecretKey)
  res.json({
    status: 200,
    message: "logged in!",
    data: {
      token: token
    }
  })
  return
}
export const searchUser = async (req: Request, res: Response) => { 
  console.log(req.body.searchParams)
  res.json({
    status: 200,
    message: "!",
    data: {}
  })
  return
}
