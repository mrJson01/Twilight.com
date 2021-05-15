const express = require("express");
const controller1 = require("../controllers/index-1.js");

const Router = express.Router();


Router.get("/",controller1.home);


module.exports = Router;