
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:r1YSrRwEz7YGvDn3@my-data.gtnxxra.mongodb.net/?retryWrites=true&w=majority&appName=my-data";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = client
