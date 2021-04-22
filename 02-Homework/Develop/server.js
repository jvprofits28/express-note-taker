//dependencies
const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

//sets up the express app
const app = express();
const PORT = 3000;

//set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
