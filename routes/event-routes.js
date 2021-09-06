const express = require("express")
const routes = express.Router()
const Event = require("../models/Event")

routes.get("/",(req,res)=>{
    Event.find({},(err,events)=>{
        if (err){
            console.log(err)
        }
        res.render("events/index",{events : events})
    })
})
routes.get("/create",(req,res)=>{
    res.render("events/create")
})
routes.post("/create",(req,res)=>{
})
routes.get("/:id",(req,res)=>{
    res.render("events/show")
})

module.exports = routes