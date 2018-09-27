const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    userImage:{
        type: String,
        required: true
    },
    upgrades:{
        type: Array,
        required: false,
        default: []
    },
    incomePerClick:{
        type: Number,
        required: false,
        default: 1
    },
    bank:{
        type: Number,
        required: false,
        default: 0
    }
})

module.exports = mongoose.model('user', userSchema)

