const User = require("../modal/User")
const bcrypt = require("bcrypt")

exports.registerUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hash = await bcrypt.hash(password, 10)

        await User.create({ ...req.body, password: hash })
        res.json({ messege: "User register success" })
    } catch (error) {
        res.status(404).json({ messege: "resource not found", error: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(404).json({ messege: "email not found" })
        }
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(404).json({ messege: "password do not match" })
        }
        res.json({ messege: "User Login success" })
    } catch (error) {
        res.status(404).json({ messege: "resource not found", error: error.message })
    }
}