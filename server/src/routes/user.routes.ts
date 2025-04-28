import { Router } from 'express';
import { UserController } from '../controllers/User/userRegisterController.ts';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/register', (req, res) => userController.register(req, res));

export { userRoutes };
