const express = require("express");
let app = express();
let PORT = process.env.PORT || 5000;
let nodemailer = require("nodemailer");
let cors = require('cors')
let request = require('request');
const path = require('path')
require('dotenv').config()


app.use(express.json())
app.use(cors())



app.post("/sendMsg", (req, res) => { 
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'gauravbajaj837@gmail.com',
        clientId:process.env.GOOGLE_KEY,
        clientSecret: process.env.GOOGLE_ID,
        refreshToken: process.env.GOOGLE_AUTH_REFRESH_TOKEN,
        accessToken:process.env.GOOGLE_AUTH_ACCESS_TOKEN, 
        expires:1000000000000000,
    }
  });
   
  transporter
    .sendMail({
      from:email,
      to: "gauravbajaj837@gmail.com",
      subject: `Inbox from portfolio`,
      text: !msg ? '' : msg   
    })
    .then((data) => {
    if(data){
     res.json({success:`the message has been send`})
    }
    })
    .catch((err) => res.json({error:err}))
});

app.get('/github',(req,res)=>{
  const options = {
    uri: `https://api.github.com/users/gau9811/repos?per_page=29&sort=created:asc&client_id=${process.env.GITHUB_KEY}&client_secret=${process.env.GITHUB_ID}`,
    method: "GET",
    headers: {"user-agent": "node.js"}
  }

  request(options,(err,response,body)=>{
      if(err){
        res.status(response.statusCode).json({err:err})
      }
       
      if(response.statusCode == 200){
        res.status(200).json({msg:JSON.parse(body)})
      }
  })
})

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}



app.listen(PORT, console.log(`server is running at ${PORT}`));
