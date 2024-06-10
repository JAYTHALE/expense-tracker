const router = require("express").Router()

const userController = require("./../controllers/auth.controller")

router
    // .get("/", userController.getAllUsers)
    .post('/register', userController.registerUsers)
    .post('/login', userController.loginUser)


module.exports = router