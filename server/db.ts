import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

// Since user requested NO DATABASE, we will mock this or keep it minimal
// The template requires this file. We'll export a dummy db if DATABASE_URL is missing.

const { Pool } = pg;

export const pool = process.env.DATABASE_URL 
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : new Pool(); // Dummy pool

// If no DB URL, this might throw on queries, but we are using FileStorage (JSON) so we won't use 'db' for storage.
export const db = drizzle(pool, { schema });
