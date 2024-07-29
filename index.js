const express = require("express")
const app = express()
const shelterRoutes = require("./routes/shelter")
const dogRoutes = require("./routes/dogs")



// app.use("/",shelterRoutes) //* 第一引数のが自動で付けられる　このばあいだとrouteの時に
app.use("/shelters",shelterRoutes) 
app.use("/dogs",dogRoutes)

app.listen(3000,()=>{
  console.log("port3000")
})