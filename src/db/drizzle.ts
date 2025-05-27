import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: '.env' });

export const db = drizzle(process.env.DATABASE_URL!);

/*
-- Database connection check --

async function checkDbConnection() {
  try {
    const result = await db.execute('SELECT 1');
    if (result.rows.length > 0) {
      console.log("Database connection successful!");
    }
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

checkDbConnection();

*/