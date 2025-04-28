import { Router } from 'express';
import { UserController } from '../controllers/User/userRegisterController.ts';
import { UserLoginController } from '../controllers/User/userLoginController.ts';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/register', (req, res) => userController.register(req, res));
userRoutes.post('/login', (req, res) => {
  const userLoginController = new UserLoginController();
  userLoginController.login(req, res);
});


export { userRoutes };
