const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    statues: {
        type: String,
        // enum:["completed","incomplete"]
        required: true

    },
    userId: {
        type: String,
        required: true
    }
})
const projects = mongoose.model("projects", projectSchema)
module.exports = projects