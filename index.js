const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { protectedRoute } = require("./middleware/auth.middleware")
require("dotenv").config()
const path = require("path")
const app = express()

app.use(express.static("dist"))
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())

app.use("/api/auth", require("./router/auth.route"))
app.use("/api/todo", require("./router/todo.route"))
app.use("/api/blog", protectedRoute, require("./router/blog.route"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "resource not found" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db conneced");
    app.listen(process.env.PORT, console.log("server running on port....", process.env.PORT))
})