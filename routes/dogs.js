const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
  res.send("all dogs")
})

router.get("/:id",(req,res)=>{
  res.send("view dog")
})

module.exports = router