const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    userImage:{
        type: String,
        required: false
    },
    upgrades:{
        type: Array,
        required: false
    },
    incomePerClick:{
        type: Number,
        required: false
    },
    bank:{
        type: Number,
        required: false
    }

    
})

module.exports = mongoose.model('score', scoreSchema)
