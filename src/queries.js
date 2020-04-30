const { Pool } = require('pg');

const pool = new Pool({
 user: 'alex',
 host: 'localhost',
 database: 'che_clean',
 password: 'lexpass',
 port: 5432,
});

const getCases = (request, response) => {
 pool.query('SELECT * FROM cases ORDER BY id ASC', (error, results) => {
  if (error) {
   throw error;
  }
  response.status(200).json(results.rows);
 });
};

module.exports = { getCases };
