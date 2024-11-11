const express= require('express');
const app= express();

const PORT = process.env.PORT || 8080;
const bodyparser= require('body-parser');
const cors= require('cors');
const nodemailer= require('nodemailer');
const sendGridTranporter= require('nodemailer-sendgrid-transport');

require('dotenv').config();

app.get('/test',(req,res) =>{
    res.send("hello baby")
});

app.listen(PORT,(req, res) =>{
    console.log("server listening on port")
});