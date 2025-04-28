import { UserDeleteRepository } from '../../repositories/User/userDeleteRepository';

const userDeleteRepository = new UserDeleteRepository();

export class UserDeleteService {
  async deleteUser(userId: string) {
    const deletedUser = await userDeleteRepository.deleteUser(userId);
    return deletedUser;
  }
}