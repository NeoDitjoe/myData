import  client from "./connectString.js";
import express from 'express'

export async function getMonthlyInstalls(){

  const db =  client.db('data')

  const results = await db.collection('monthly-installs')
    .aggregate([
      {$project: { _id: 0 }}
    ]).toArray()

  return results
}

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await getMonthlyInstalls())
})

const monthlyInstalls = router

export default monthlyInstalls