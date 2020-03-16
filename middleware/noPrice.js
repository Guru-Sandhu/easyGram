function noPrice (req, res, next) {
  const inputs = Object.keys(req.body)
  let noMoney = false
  inputs.forEach(input => {
    if (!req.body[input] === true) {
      noMoney = true
    }
  })
  if (noMoney) {
    return res.render('users/newgrams', { errors: ['Fill the Whole Form Please'] })
  }
  next()
}

module.exports = noPrice
