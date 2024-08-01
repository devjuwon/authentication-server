const express = require("express")
const app = express()
const connectDb = require("./config/db")
const port = 5000
const userRoute = require("./routes/userRoute")

connectDb()
app.use(express.json())

app.use("/api", userRoute)

app.listen(port,() => {
    console.log("server started successfully");
})