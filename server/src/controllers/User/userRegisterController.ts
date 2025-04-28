import { Request, Response } from 'express';
import { UserService } from '../../services/User/userRegisterService.ts';

const userService = new UserService();

export class UserController {
  async register(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;
      const user = await userService.registerUser({ email, password, name });
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
