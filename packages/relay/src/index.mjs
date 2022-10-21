import express from 'express'
import { provider, UNIREP_ADDRESS } from './config.mjs'
import { SQLiteConnector } from 'anondb/node'
import { schema, Synchronizer } from '@unirep/core'

const app = express()

const port = process.env.PORT ?? 8000
app.listen(port, () => console.log(`Listening on port ${port}`))

const db = new SQLiteConnector(schema, ':memory:')
const synchronizer = new Synchronizer({
  db,
  provider,
  unirepAddress: UNIREP_ADDRESS,
  attesterId: '0xBf9E8b3B0FED002e0eE97B4A5dE2a0761B3E3fFD', // need to update this
})

await synchronizer.start()