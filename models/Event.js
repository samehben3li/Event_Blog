const mongoose = require("mongoose")

const eventShema = new mongoose.Schema({
    title : {
        type :String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
    location : {
        type :String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    createdAt:{
        type : Date,
        required : true
    }
})

module.exports = mongoose.model("Event",eventShema,"events")