const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

const app = express()
//middlewear

//This middleware is used to get the body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// use goalRoutes to handle any endpoints that end with /api/goals
app.use('/api/goals', require('./routes/goalRoutes'))
// user resource
// comments resources
    app.listen(port, ()=> {console.log(`server started on port ${port}`);})
