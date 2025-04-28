import { prisma } from '../../../prisma/client';

export class UserLoginRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }
}