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
        required: false
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

userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('user', userSchema)

