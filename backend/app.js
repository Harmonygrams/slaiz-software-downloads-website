const express = require('express') 
const cors = require('cors')
require('dotenv').config()
require('./utils/connectDb')()
const router = require('./routes/index')
const PORT = process.env.PORT 
const app = express() 

//App middlware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
//routes
app.use(router)
app.listen(PORT, () => {
    console.log('Server is listerning to port ', PORT)
})