import { Request, Response } from 'express';
import { UserDeleteService } from '../../services/User/userDeleteService';

const userDeleteService = new UserDeleteService();

export class UserDeleteController {
  async delete(req: Request, res: Response) {
    try {
      const userId = req.user.id; 
      const deletedUser = await userDeleteService.deleteUser(userId);
      res.status(200).json({ message: 'Usuário deletado com sucesso.', deletedUser });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}