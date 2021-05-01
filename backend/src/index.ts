import express from 'express'
import { Sequelize, Model, DataTypes } from 'sequelize'
import bodyParser from 'body-parser'
import { usersRouter } from './routes/users'

const sequelize = new Sequelize(
  'postgresql://ml-specialist-python:ml-addict@localhost:5432/postgres',
)

try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
