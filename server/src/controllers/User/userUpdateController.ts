import { Request, Response } from 'express';
import { UserUpdateService } from '../../services/User/userUpdateRepository.ts';

const userUpdateService = new UserUpdateService();

export class UserUpdateController {
  async update(req: Request, res: Response) {
    try {
      const userId = req.user.id;
      const updatedData = req.body;
      const updatedUser = await userUpdateService.updateUser(userId, updatedData);
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}