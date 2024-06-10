const router = require("express").Router()

const userController = require("../controllers/account.controller")

router
    // .get("/", userController.getAllUsers)
    .post('/credit', userController.credit)
    .post('/debit', userController.debit)


module.exports = router