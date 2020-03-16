const knex = require('../db/client')

module.exports = {
  all: () => {
    return knex.select().from('grams')
      .then(grams => {
        return grams
      })
  },
  insert: ({ srcUrl, description, price }) => {
    return knex.insert({ srcUrl, description, price }).into('grams')
      .returning('*')
      .then(newGram => {
        return newGram
      })
  },
  one: (id) => {
    return knex.select().from('grams').where({ id: id })
  },
  delete: (id) => {
    return knex.delete().from('grams').where({ id: id })
  }
}
