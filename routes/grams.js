const express = require('express')
const { grams } = require('../controllers')
const router = express.Router()

router.get('/', grams.index)

router.post('/', grams.insert)

router.get('/newgrams', grams.new)

module.exports = router
