var express = require('express')
var scoreRouter = express.Router()
const User = require('../models/user')



//get all and post
scoreRouter.route('/')
    .get((req, res)=>{
        console.log(req)
        //make sure we only get the users data
        User.findOne({_id: req.user._id},(err, user)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(user)
        }) 
    })
    // .post((req, res)=>{
    //     console.log(req.body)
    //     const newScore = new User(req.body)
    //     //Express-jwt provides the req.user on all authorized requests
    //     // newScore.user = req.user._id
    //     newScore.save((err, newSaveduser)=>{
    //         if (err) return res.status(500).send(err)
    //         return res.status(201).send(newSaveduser)
    //     }) //command to save to mongo database
    // })

scoreRouter.route('/all')
    .get((req, res)=>{
        //returns all
        Todos.find({},(err,users)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(users)
        })
    })

// get one, put, delete
scoreRouter.route('/:id')
//check for id of post and user
    .get((req, res)=>{
        console.log(req)
        User.findOne({_id: req.params.id, user: req.user._id},(err, founduser)=>{
            if(err)return res.status(500).send(err)
            return res.status(200).send(founduser)
        })
    })
    .put((req, res)=>{
        User.findOneAndUpdate({
            _id:req.params.id
        },
        req.body,
        (err, updateduser)=>{
            if(err)return res.status(500).send(err)
            return res.status(201).send(updateduser)
        })
    })
    .delete((req, res)=>{
        User.findOneAndRemove({_id: req.params.id}, (err, deleteduser)=>{
            if(err)return res.status(500).send(err)
            return res.status(202).send({deleteduser: deleteduser, msg: "user successfully deleted"})
        })
    })


module.exports = scoreRouter

