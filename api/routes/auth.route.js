const express = require('express');
const authc = require('../controller/auth.controller');
const authrouter = express.Router();

authrouter.post('/signup', authc.signup);

module.exports = authrouter;