const { default: mongoose } = require("mongoose");
require('dotenv').config();

async function ConnectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect DB Successfully...!!!");
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = ConnectToDb;