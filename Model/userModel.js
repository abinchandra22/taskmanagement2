const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide a valid username"],
        minLength: [5, "Name must contain at least 5 character"],
        maxLength: [15, "Name cannot exceed 15 characters"]
    },
    email: {
        type: String,
        required: [true, "Please provide valid email"],
        unique: [true, "User already registered"],
        validate: [validator.isEmail, "Please provide valid email"]
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minLength: [5, "Password must contain at least 5 character"],
        maxLength: [15, "Password cannot exceed 15 characters"]

    }

})

const users = mongoose.model("users", userSchema)

module.exports = users