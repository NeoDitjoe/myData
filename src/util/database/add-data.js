import client from "./connectString.js";
import express from 'express'

export async function addData(){

  const db = client.db('data')

  await db.collection('yearly-installs')
    .insertMany([
      {
        "year": "2020",
        "numInstalls": 1
      },
      {
        "year": "2021",
        "numInstalls": 12
      },
      {
        "year": "2022",
        "numInstalls": 77
      },
      {
        "year": "2023",
        "numInstalls": 226
      },
      {
        "year": "2024",
        "numInstalls": 13
      }
    ])
}

const router = express.Router()

router.post('/', async (req, res) => {
  await addData()
  res.status(201).send()
})

const add = router

export default add