const express = require("express")
const routes = express.Router()

routes.get("/",(req,res)=>{
    res.render("events/index")
})
routes.get("/create",(req,res)=>{
    res.render("events/create")
})
routes.get("/:id",(req,res)=>{
    res.render("events/show")
})

module.exports = routes