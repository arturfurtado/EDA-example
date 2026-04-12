import { defineConfig } from "drizzle-kit";
import env from "./src/env";

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/database.schema.ts',
  dbCredentials: {
    url: env.DATABASE_URL
  }
})