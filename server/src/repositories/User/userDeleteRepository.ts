import { prisma } from '../../../prisma/client';

export class UserDeleteRepository {
  async deleteUser(userId: string) {
    return prisma.user.delete({
      where: { id: userId },
    });
  }
}