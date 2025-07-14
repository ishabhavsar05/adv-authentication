const express = require('express');
const ConnectToDb = require('./db/db');
userRoutes = require('./routes/user.routes');

require('dotenv').config();
const   PORT = process.env.PORT || 3000;

const app = express();
const cookieParser = require('cookie-parser')

app.set('view engine','ejs')
app.use(express.json());
app.use('/api/user', userRoutes)
app.use(cookieParser())


app.listen(PORT,async()=>{
    try {
        await ConnectToDb();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(error);
        
    }
})