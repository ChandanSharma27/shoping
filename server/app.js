require("dotenv").config(); 
const express = require("express");
const app = express();

const bookrouter = require('./apis/users/users.router');
const userRouter = require('./apis/users/users.router');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require("express");

// endpoint
// app.get("/xyz", (req, res)=> {
//     res.json({
//         status : "1",
//         message : "this is working"
//     })
//  })



app.use(cors()); 
app.use(express.static(path.join(__dirname, '../')));
app.use(express.json());


app.use('/apis',bookrouter);
app.use('/apis/users',userRouter);

//localhost 
app.listen(process.env.APP_PORT,() => {console.log("server running.................")});