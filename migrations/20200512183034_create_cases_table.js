const knex = require('knex');

/**
 * @param {knex} knex
 */

exports.up = function(knex) {
  return knex.schema.hasTable('cases', (exists) =>{
    if (!exists) {
      knex.schema.createTable('cases', (table) => {
        table.increments('id').primary();
        table.string('details', 500).notNullable();
        table.specificType('location', 'POINT').notNullable();
        table.string('address', 300).notNullable();
        table.string('image_url', 500).notNullable();
        table.integer('status').defaultTo(0);
        table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cases');
};
