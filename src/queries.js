import pg from 'pg';

const pool = new pg.Pool();
export const getCases = (request, response) => {
 pool.query('SELECT * FROM cases ORDER BY id ASC', (error, results) => {
  if (error) {
   throw error;
  }
  response.status(200).json(results.rows);
 });
};
