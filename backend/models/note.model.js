const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isPinned: {
        type: Boolean, 
        required: true
    },
    userId: {
        type: String, 
        require: true
    },
    createdOn: {
        type: Date, 
        default: new Date().getTime()
    }
})

module.exports = mongoose.model("Notes", noteSchema)