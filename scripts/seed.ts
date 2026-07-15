import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const existing = await prisma.admin.findUnique({ where: { username } });
  if (existing) {
    console.log("Admin user already exists");
    return;
  }

  const hashed = await bcrypt.hash(password, 12);
  await prisma.admin.create({ data: { username, password: hashed } });
  console.log("Admin user created:", username);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
