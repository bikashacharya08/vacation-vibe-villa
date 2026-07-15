import "dotenv/config";
import bcrypt from "bcryptjs";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.resolve(__dirname, "..", "dev.db"));

const username = process.env.ADMIN_USERNAME || "admin";
const password = process.env.ADMIN_PASSWORD || "admin123";

const existing = db.prepare("SELECT id FROM Admin WHERE username = ?").get(username);
if (existing) {
  console.log("Admin user already exists");
} else {
  const hashed = bcrypt.hashSync(password, 12);
  db.prepare("INSERT INTO Admin (username, password) VALUES (?, ?)").run(username, hashed);
  console.log("Admin user created:", username);
}

db.close();
