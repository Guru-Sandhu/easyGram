const { gram } = require('../models')

module.exports = {
  index: (req, res) => {
    gram.all()
      .then(grams => {
        res.render('grams/index', { grams })
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
    res.render('grams/newgrams')
  },
  show: (req, res) => {
    const { id } = req.params
    gram.one(parseInt(id))
      .then(grams => {
        if (grams.length > 0) {
          res.render('grams/show', { gram: grams[0] })
        } else {
          res.send(`No gram with ID:${id}`)
        }
      })
  },
  delete: (req, res) => {
    const { id } = req.params
    gram.delete(id)
      .then(() => {
        res.redirect('/grams')
      })
      .catch(e => {
        console.log(e)
      })
  }
}
