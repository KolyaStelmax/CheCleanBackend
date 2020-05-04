import pg from 'pg';

import knex from 'knex';

export class PostgresService {
  constructor() {
    this.pool = new pg.Pool();

    this.knex = knex({
      client: 'pg',
      connection: {
        host : process.env.PGHOST,
        user : process.env.PGUSER,
        password : process.env.PGPASSWORD,
        database : process.env.PGDATABASE
      },
      pool: { min: 0, max: 7 }
    })
  }
}
