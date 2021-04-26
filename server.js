//dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

//sets up the express app
const app = express();
const PORT = process.env.PORT || 3000;

//set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes for html
app.get("/,", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
//routes for api
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

app.get("/api/notes", (req, res) => {
  readFilePromise("./db/db.json", "utf8").then((data) => {
    console.log(data);
    const notes = JSON.parse(data);
    console.log(notes);
    res.json(notes);
  });
});

//LISTENER
//code below starts our server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
