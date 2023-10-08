// user.route.js (CommonJS syntax)
const express = require('express');
const usercontroller = require('../controller/user.controller.js');
const urouter = express.Router();

urouter.get('/test', usercontroller.test);

module.exports = urouter;
