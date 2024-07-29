const express = require("express")
const router = express.Router()

router.get("/secret", (req, res) => {
  res.send("secret")
})

router.get("/deleteall",(req,res)=>{
  res.send("deleted")
})

module.exports = router
