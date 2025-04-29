import { Router } from 'express';
import { UserController } from '../controllers/User/userRegisterController.ts';
import { UserLoginController } from '../controllers/User/userLoginController.ts';
import { UserUpdateController } from '../controllers/User/userUpdateController.ts';
import { UserDeleteController } from '../controllers/User/userDeleteController.ts';
import { authMiddleware } from '../middleware/authMiddleware.ts';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/register', (req, res) => userController.register(req, res));
userRoutes.post('/login', (req, res) => {
  const userLoginController = new UserLoginController();
  userLoginController.login(req, res);
});
userRoutes.put('/update', authMiddleware, (req, res) => {
  const userUpdateController = new UserUpdateController();
  userUpdateController.update(req, res);
});
userRoutes.delete('/delete', authMiddleware, (req, res) => {
  const userDeleteController = new UserDeleteController();
  userDeleteController.delete(req, res);
});

export { userRoutes };
