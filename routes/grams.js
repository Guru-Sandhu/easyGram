const express = require('express')
const knex = require('../db/client')
const router = express.Router()

router.get('/', (req, res) => {
  knex.select('*').from('grams')
    .then(grams => {
      res.render('users/index', { grams })
    })
})

router.post('/', (req, res) => {
  const { srcUrl, description } = req.body
  knex.insert({ srcUrl, description }).into('grams')
    .then(() => {
      res.redirect('/grams')
    })
    .catch(() => {
      res.render('users/newgrams')
    })
})

router.get('/newgrams', (req, res) => {
  res.render('users/newgrams')
})

module.exports = router
