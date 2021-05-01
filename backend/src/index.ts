import express from 'express'
import { Sequelize, Model, DataTypes } from 'sequelize'
import bodyParser from 'body-parser'
import { usersRouter } from './routes/users'
import { config } from './config'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT } = config

const sequelize = new Sequelize(
  `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/postgres`,
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
