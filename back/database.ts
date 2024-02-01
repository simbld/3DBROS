/**
 * @module database
 *
 * Creates a Pool instance from the 'pg' package to manage the connection to the PostgreSQL database.
 *
 * @param {string} connectionString - PostgreSQL database connection string.
 * @param {string} text - SQL request.
 * @param {any[]} params - SQL query parameters.
 * @returns {Promise<QueryResult<any>>} - Returns a Promise of the query result.
 *
 */

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const pool = new Pool({
  connectionString: process.env.PG_URL,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
