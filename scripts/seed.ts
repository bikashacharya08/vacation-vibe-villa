import "dotenv/config";
import bcrypt from "bcryptjs";
import { withDb } from "../lib/prisma";

async function main() {
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  await withDb(async (prisma) => {
    const existing = await prisma.admin.findUnique({ where: { username } });
    if (existing) {
      console.log("Admin user already exists");
    } else {
      const hashed = bcrypt.hashSync(password, 12);
      await prisma.admin.create({
        data: {
          username,
          password: hashed,
        },
      });
      console.log("Admin user created:", username);
    }
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
