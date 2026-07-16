import "dotenv/config";
import bcrypt from "bcryptjs";
import { withDb } from "../lib/prisma";

async function main() {
  const username = "admin";
  const password = "admin123";
  const hashed = bcrypt.hashSync(password, 12);

  await withDb(async (prisma) => {
    await prisma.admin.upsert({
      where: { username },
      update: { password: hashed },
      create: { username, password: hashed },
    });
    console.log("Admin user password forcefully updated to admin123");
  });
}

main().catch(console.error);
