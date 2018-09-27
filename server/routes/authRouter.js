const express = require('express')
const jwt = require('jsonwebtoken')
const authRouter = express.Router()
const User = require('../models/user')

authRouter.post('/signup', (req, res)=>{
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if (err) return res.status(500).send({success: false, err})

        if(existingUser !== null){
            res.status(400).send({success: false, err: 'That usename already exists!'})
        }

        const newUser = new User(req.body)
        newUser.save((err, user)=> {
            if(err) return res.status(500).send({success:false, err})

            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success:true, user: user.toObject(), token})
        })
    })
})

authRouter.post('/login', (req, res)=>{
    User.findOne({username: req.body.username.toLowerCase()}, (err, user)=>{
        if(err) return res.status(500).send({success:false, err:"Username or password are incorrect"})

        console.log('there')
        if(!user || user.password !== req.body.password){
            return res.status(403).send({success: false, err:"Username or password are incorrect"})
        }
        
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.send({success:true, user: user.toObject(), token})
    })
})

module.exports = authRouter


