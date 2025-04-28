import { prisma } from '../../../prisma/client.ts';

export class UserRepository {
  async createUser(data: { email: string; password: string; name: string }) {
    return prisma.user.create({ data });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }
}
