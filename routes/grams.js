const express = require('express')
const { grams } = require('../controllers')
const router = express.Router()

router.get('/', grams.index)

router.post('/', grams.insert)

router.get('/newgrams', grams.new)

router.get('/:id', grams.show)

module.exports = router
