const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const userRouter = require('./routes/userProfile')
const gramsRouter = require('./routes/grams')
const noPrice = require('./middleware/noPrice')

const app = express()

app.use(logger('dev'))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method
    return method
  }
}))
app.use(noPrice)
app.use('/users', userRouter)
app.use('/grams', gramsRouter)

app.get('/', (req, res) => {
  res.render('welcome')
})

const PORT = 4000
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`Listening on ${DOMAIN}:${PORT}`)
})
