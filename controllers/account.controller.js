const asyncHandler = require("express-async-handler")

const accountCounteroller = require("../modal/Account")
const Account = require("../modal/Account")

exports.credit = asyncHandler(async (req, res) => {
    await Account.create({ ...req.body, type: "credit" })
    res.json({ message: "Account Credit Success" })
})
exports.debit = asyncHandler(async (req, res) => {
    await Account.create({ ...req.body, type: "debit" })
    res.json({ message: "Account debit Success" })
})