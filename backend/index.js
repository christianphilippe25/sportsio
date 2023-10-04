const express = require('express');
const db = require('./config')
const cors = require('cors')

// NEED TO RUN IN DATABASE
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'c79916052';

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())


// Route to get one post
app.get("/api/user/:userid", (req,res)=>{
    const userid = req.params.userid;
    //
});

app.listen(3002, ()=>{
    console.log(`Server is running on ${3002}`)
})