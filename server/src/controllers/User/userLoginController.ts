import { Request, Response } from 'express';
import { UserLoginService } from '../../services/User/userLoginService';

const userLoginService = new UserLoginService();

export class UserLoginController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await userLoginService.loginUser(email, password);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}