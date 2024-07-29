const express = require("express")
const app = express()
const shelterRoutes = require("./routes/shelter")
const dogRoutes = require("./routes/dogs")
const adminRoutes = require("./routes/admin")

app.use((req, res, next) => {
  if (req.query.isAdmin) { 
    return next()
  }
  res.send("not admin")
})

// app.use("/",shelterRoutes) //* 第一引数のが自動で付けられる　このばあいだとrouteの時に
app.use("/shelters", shelterRoutes)
app.use("/dogs", dogRoutes)
app.use("/admin", adminRoutes)

app.listen(3000, () => {
  console.log("port3000")
})
