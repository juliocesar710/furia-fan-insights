import bcrypt from 'bcrypt';
import { UserUpdateRepository } from '../../repositories/User/userUpdateRepository';

const userUpdateRepository = new UserUpdateRepository();

export class UserUpdateService {
  async updateUser(userId: string, updatedData: Partial<{ name: string; email: string; password: string }>) {
    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    }

    return userUpdateRepository.updateUser(userId, updatedData);
  }
}