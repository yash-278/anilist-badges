const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/awc", function (req, res) {
  res.render("awc");
});

app.get("/awc/genre", function (req, res) {
  res.render("awcGenre");
});

app.get("/stats", function (req, res) {
  res.render("stats");
});

app.get("/kusogaki", function (req, res) {
  res.render("kusogaki");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log(`Server started at port ${port}`);
});
