const express = require('express')
const logger = require('morgan')
const userRouter = require('./routes/userProfile')
const gramsRouter = require('./routes/grams')

const app = express()

app.use(logger('dev'))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
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
