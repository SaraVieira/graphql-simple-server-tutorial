import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './schema'
import resolvers from './resolvers'
import Talk from './model'
const env = require('dotenv').config()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@ds042527.mlab.com:42527/awesome-talks`
)

const PORT = 3000

const app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { Talk } })
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)

console.log(`YASS QUEEN ON PORT: ${PORT}`)
