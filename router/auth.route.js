// const { register } = require("../controllers/auth.controller")
const auth = require("../controllers/auth.controller")
const { protectedRoute } = require("../middleware/auth.middleware")

const route = require("express").Router()

route
    // .post("/register", register)
    .post("/register", auth.register)
    .post("/login", auth.login)
    .post("/send-otp", auth.sendOtp)
    .post("/login-with-otp", auth.loginWithOtp)
    .post("/logout", auth.logout)
    .post("/oauth", auth.loginWithGoogle)

    .get("/users", protectedRoute, auth.allUsers)
module.exports = route