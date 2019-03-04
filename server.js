var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Add our JS+CSS+IMGS+Fonts
var filesToAdd = ['css', 'js', 'imgs', 'fonts']

for (var i in filesToAdd) {
  app.use('/assets', express.static(__dirname + "/app/public/assets/" + filesToAdd[i]));
}


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});