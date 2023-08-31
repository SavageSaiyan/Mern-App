const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const colors = require('colors') //not required
const connectDB = require('./config/db')
const{errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const app = express()
//middlewear

//This middleware is used to get the body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// use goalRoutes to handle any endpoints that end with /api/goals
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
// user resource
// comments resources

app.use(errorHandler)


    app.listen(port, ()=> {console.log(`server started on port ${port}`);})
