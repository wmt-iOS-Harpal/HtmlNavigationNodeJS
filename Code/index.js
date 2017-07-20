const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("files"));
app.set('view engine', 'pug')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/files/home.html"));
});

app.get("/aboutUs.php", function(req, res) {
  res.sendFile(path.join(__dirname + "/files/aboutUs.html"));
});

app.get("/profile.php", function(req, res) {
  res.sendFile(path.join(__dirname + "/files/profile.html"));
});



app.post("/profile.php", function(req, res) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;

    console.log(firstName);
    console.log(lastName);
    if (firstName == "harpal" && lastName == "jadeja") {

      res.render('success', { title: "Success" ,firstName : firstName, lastName : lastName})
      //res.sendFile(path.join(__dirname + "/files/Login.html"));
    }
    else {
      console.log("Invalied UserName and Passworf");
    }



});

app.listen(3001, function() {
    console.log('Server is running on port 3001');
});
