import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log('Connected to MongoDB!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
