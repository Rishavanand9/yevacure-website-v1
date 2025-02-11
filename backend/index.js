const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000;

//middleware setup
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
const DB_URL = process.env.MONGODB_CONNECTION_STRING

const authRoutes = require("./src/users/user.route")
app.use('/api/auth', authRoutes)

main().then(() => console.log("MongoDb Connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
}

app.get('/', (req, res) => {
  res.send("Yevacure Ecommerce Server")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})