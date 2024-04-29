import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 5100

import add from './database/add-data.js'
app.use('/api/insert', add)

app.listen(port, () => {
  console.log(`connected to server ${port}`)
})