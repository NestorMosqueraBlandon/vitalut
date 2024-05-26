import { Client } from 'pg';
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from 'drizzle-orm/node-postgres/migrator'

const { POSTGRESQL_URL } = process.env;

export interface InitPostgresqlOptions {
  postgresqlUrl?: string;
}

export const initPostgresql = async({ postgresqlUrl }: InitPostgresqlOptions) => {
  const parsedPOSTGRESQLUrl = new URL(postgresqlUrl || POSTGRESQL_URL || '');

  const config = {
    user: parsedPOSTGRESQLUrl.username,
    password: parsedPOSTGRESQLUrl.password,
    host: parsedPOSTGRESQLUrl.hostname,
    port: 5432,
    database: parsedPOSTGRESQLUrl.pathname.replace(/^\/+|\/$/g, ''),
    requestTimeout: 60000,
  };

  const client = new Client(config);

  await client.connect();
  const db = drizzle(client, { logger: true });
  
  await migrate(db, {
    migrationsFolder: './migrations'
  });

  console.log('Postgres connection established');

}