import client from "./connectString.js";
import express from 'express'

export async function addData(){

  const db = client.db('data')

  await db.collection('Monthly-installs')
    .insertMany([
      {
        "month": "2023-08",
        "numInstalls": 29
      },
      {
        "month": "2023-09",
        "numInstalls": 16
      },
      {
        "month": "2023-10",
        "numInstalls": 17
      },
      {
        "month": "2023-11",
        "numInstalls": 10
      },
      {
        "month": "2023-12",
        "numInstalls": 12
      },
      {
        "month": "2024-01",
        "numInstalls": 8
      },
      {
        "month": "2024-02",
        "numInstalls": 4
      },
      {
        "month": "2024-03",
        "numInstalls": 1
      }
    ]
    )
}

const router = express.Router()

router.post('/', async (req, res) => {
  await addData()
  res.status(201).send()
})

const add = router

export default add