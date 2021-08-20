const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "public/index.html");
});

app.post("/contact", function(req,res) {
    const yourName = req.body.name;
    const yourNumber = req.body.number;
    const email = req.body.username;

    res.render("contact", {
        yourName:yourName,
        yourNumber:yourNumber,
        email:email
    });
    
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started successfully!");
});