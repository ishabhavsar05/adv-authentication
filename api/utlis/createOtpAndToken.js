const jwt = require('jsonwebtoken')
require('dotenv').config();
const otpGenerator = require('otp-generator')

function createOtpAndToken(userData) {
    // create verification otp
    const verification_Token = jwt.sign(
        { user : userData },
        "dnndkasjndksdnksjdnkja",
        {
            expiresIn: "5m",
        }
    )
    if (!verification_Token) {
        res.status(400).send({ message: "Error in genrating token" })
    }

    // create otp
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false , lowerCaseAlphabets:false, digits:true });
    console.log(otp);
    
    return{verification_Token,otp}

}

module.exports=createOtpAndToken