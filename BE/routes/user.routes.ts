import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/signin', (request, response) => {
  return response.json("Login");
});
usersRouter.get('/signup', (request, response) => {
  return response.json("Sign Up");
});

export default usersRouter;