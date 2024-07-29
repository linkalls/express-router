const express = require("express")
const router = express.Router()

router.get("/shelters",(req,res)=>{
res.send("all shelters")
})

router.post("/shelters",(req,re)=>{
res.send("create shelter")
})

router.get("/shelters/:id/edit",(req,res)=>{
  res.send("edit")
})

module.exports = router