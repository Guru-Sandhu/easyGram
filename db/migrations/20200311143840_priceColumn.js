
exports.up = function (knex) {
  return knex.schema.table('grams', function (t) {
    t.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.table('products', function (t) {
    t.dropColumn('price')
  })
}
