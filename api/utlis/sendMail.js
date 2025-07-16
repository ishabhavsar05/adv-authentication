const nodemailer = require("nodemailer");
require('dotenv').config();


async function sendMail(userEmail,htmltemplate) {
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.HOST_PASS
        },
        tls: {
        rejectUnauthorized: false, // <-- Add this to ignore SSL certificate issues
    },
    });

    // Wrap in an async IIFE so we can use await.

    try {
        // Wrap in an async IIFE so we can use await.

        const info = await transporter.sendMail({
            from: process.env.HOST_EMAIL,
            to: userEmail,
            subject: "Verification OTP ✔",
            html: htmltemplate, // HTML body
        });
        return info;
    } catch (error) {
        console.log(error);
        throw error 
    }
}

module.exports=sendMail


