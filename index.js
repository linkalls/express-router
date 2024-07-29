const express = require("express")
const app = express()
const shelterRoutes = require("./routes/shelter")


// app.use("/",shelterRoutes) //* 第一引数のが自動で付けられる　このばあいだとrouteの時に
app.use("/shelters",shelterRoutes) //* これだと/shelters/sheltersになっちゃうよ

app.listen(3000,()=>{
  console.log("port3000")
})