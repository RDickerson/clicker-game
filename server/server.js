var express = require('express')
var app = express()
var morgan = require("morgan")
var mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 8989
const scoreRoutes = require('./routes/scoreRouter')
const authRoutes = require('./routes/authRouter')
const expressJWT = require('express-jwt')
const allRoutes = require('./routes/allRouter')

app.use(morgan('dev'))
app.use(express.json())

//connect to mongo
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true})
    .then(()=>console.log('Successfully connected to mongoDB'))
    .catch(err=>console.log(err))

//decode jwt and add req.user to all requests sent to /api
app.use('/api', expressJWT({secret: process.env.SECRET}))

app.use('/api/score', scoreRoutes)
app.use('/all', allRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log("starting")
})