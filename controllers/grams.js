const { gram } = require('../models')

module.exports = {
  index: (req, res) => {
    gram.all()
      .then(grams => {
        res.render('users/index', { grams })
      })
  },
  insert: (req, res) => {
    const { srcUrl, description, price } = req.body
    gram.insert({ srcUrl, description, price })
      .then(gram => {
        res.send(gram)
      })
  },
  new: (req, res) => {
    res.render('users/newgrams')
  }
}
