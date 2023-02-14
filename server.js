const express = require('express');
const app = express();
require('dotenv').config()

//MIDDLEWARE
app.use(express.json())




//listen for sever
app.listen(process.env.PORT , () => { //
    console.log(`Connected to port: ${process.env.PORT}`) //
});