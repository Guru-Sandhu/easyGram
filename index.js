const express = require('express')
const logger = require('morgan')
const userRouter = require('./routes/userProfile')

const app = express()

app.use(logger('dev'))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.render('welcome')
})

// app.get('/users', (req, res) => {
//   res.render('../routes/userProfile')
// })

const PORT = 4000
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`Listening on ${DOMAIN}:${PORT}`)
})
