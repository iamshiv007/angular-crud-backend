const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()

// Connecting with mongo db
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to Mongo! Database`)
    } catch (error) {
        console.log('Error connecting to mongo')

    }
}
// Setting up port with express js
const app = express()

app.use(cors())

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
connectDb()

app.get("/", (req, res) => {
    res.send("Test success")
})
