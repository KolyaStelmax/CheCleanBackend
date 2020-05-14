require('dotenv').config();

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host : process.env.PGHOST,
      user : process.env.PGUSER,
      password : process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    }
  },
};

// console.log(process.env.PGUSER)
// console.log(process.env.PGHOST)
// console.log(process.env.PGPASSWORD)
// console.log(process.env.PGDATABASE)
