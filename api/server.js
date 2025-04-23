const express = require('express')
const { Sequelize } = require('sequelize')
const cors = require('cors')
const bodyParser = require('body-parser')
const bookRoutes = require('./routes/bookRoutes')
const reviewRoutes = require('./routes/reviewRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
})

sequelize.authenticate()
  .then(() => {
    console.log('Connected to SQLite database')
  })
  .catch((err) => {
    console.error('SQLite connection error:', err)
  })

// Sync models
sequelize.sync()
  .then(() => {
    console.log('Database synced')
  })
  .catch((err) => {
    console.error('Error syncing database:', err)
  })

// Make sequelize instance available to routes/controllers via app.locals
app.locals.sequelize = sequelize

app.use('/api/books', bookRoutes)
app.use('/api/reviews', reviewRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
