import { prisma } from '../../../prisma/client';

export class UserUpdateRepository {
  async updateUser(userId: string, updatedData: Partial<{ name: string; email: string; password: string }>) {
    return prisma.user.update({
      where: { id: userId },
      data: updatedData,
    });
  }
}