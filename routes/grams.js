const express = require('express')
const knex = require('../db/client')
const router = express.Router()

router.get('/', (req, res) => {
  knex.select('*').from('grams')
    .then(grams => {
      res.render('users/index', { grams })
    })
})

module.exports = router
