const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./routers/router.js");

const app = express();

app.set('views',path.join(__dirname,"views"));
app.set('view engine',"pug");
app.use(express.static("public"));


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/",router);

module.exports = app;