var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Add our JS
app.use('/assets', express.static(__dirname + "/app/public/assets/css"));
app.use('/assets', express.static(__dirname + "/app/public/assets/js"));
app.use('/assets', express.static(__dirname + "/app/public/assets/imgs"));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/add.html"));
});




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});