const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("all shelters")
})

router.post("/", (req, re) => {
  res.send("create shelter")
})

router.get("/:id/edit", (req, res) => {
  res.send("edit")
})

router.get("/:id", (req, res) => {
  res.send("HI")
})

module.exports = router
