const { gram } = require('../models')

module.exports = {
  index: (req, res) => {
    gram.all()
      .then(grams => {
        res.render('users/index', { grams })
      })
  },
  insert: (req, res) => {
    const { srcUrl, description } = req.body
    gram.insert({ srcUrl, description })
      .then(gram => {
        res.send(gram)
      })
  },
  new: (req, res) => {
    res.render('users/newgrams')
  }
}
