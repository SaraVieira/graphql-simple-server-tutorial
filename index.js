import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './schema'
import resolvers from './resolvers'
import env from './.env'
import Talk from './model'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

mongoose.connect(
  `mongodb://${env.username}:${
    env.password
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
