const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const { logger } = require("./middleware/logger")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.use("/api/auth", require("./route/auth.router"))
app.use("/api/account", require("./route/account.router"))

app.use("*", (req, res) => {
    res.status(404).json({ messege: "resource not found 404" })
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ messege: "server Error", error: err.messege })
})


mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("server running"))
    console.log("MONGO CONNECTED");
})