const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const connectDb = () => {
    mongoose.connect(MONGO_URI, {
    }, (err) => {
        if(err) return console.log(err)
        console.log('Database connected success')
    })
}
module.exports = connectDb