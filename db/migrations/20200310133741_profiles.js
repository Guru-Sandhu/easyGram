// const knex = require('knex')

exports.up = function (knex) {
  return knex.schema.createTable('grams', t => {
    t.increments('id')
    t.string('srcUrl')
    t.string('description')
    t.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('grams')
}
