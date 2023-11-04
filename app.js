const express = require('express')
const cors = require('cors')
require("dotenv").config()

// Setting up port with express js
const app = express()

app.use(cors())

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

const connectDb = require('./database/db')
connectDb()

app.get("/", (req, res) => {
    res.send("Test success")
})
