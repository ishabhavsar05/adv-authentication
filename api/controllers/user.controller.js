const UserModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const ejs = require('ejs')
const createOtpAndToken = require("../utlis/createOtpAndToken")
require('dotenv').config()


module.exports.test = (req, res) => {
    res.status(200).send({
        message: "Test API is Working....!!!"
    })
}

module.exports.register = async (req, res) => {

    // Validate request body
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).send({ message: "All fields are required" })
    }
    try {
        const isExistsUser = await UserModel.findOne({ email: req.body.email })
        if (isExistsUser) {
            return res.status(400).send({ message: "User already exists " })
        }

        const {verification_Token,otp}=createOtpAndToken(req.body)
        const htmltemplate = await ejs.renderFile(__dirname+"/../views/email.ejs",{name:req.body.name,otp})
        console.log(htmltemplate);
        res.send("ok")

    } catch (error) {

        res.status(500).send({ message: "Internal Server Error" })
    }
}