const mongoose = require("mongoose")
let Event = require("../models/Event")

const uri = "mongodb+srv://sameh:sameh123@cluster0.uk5oo.mongodb.net/events?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
  console.log("DB Connected!")
}).catch(err => {
  console.log(Error, err.message);
})

let newEvent = new Event({
    title : "tesggt",
    description :"kcnlkcnzdzdszs,f:qs,:qs,lknsknxc,;",
    location:"redeyef",
    date : Date.now(),
    createdAt : Date.now() 
})

newEvent.save(err=>{
    console.log(err)
})