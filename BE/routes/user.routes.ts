import { Router } from 'express';
import { registerUser, loginUser, searchUser } from '../controllers/users';
import { auth } from '../middleware/auth';

const usersRouter = Router();

usersRouter.post('/register', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.post('/search-user',auth ,searchUser);


export default usersRouter;