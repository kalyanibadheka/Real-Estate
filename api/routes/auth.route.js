const express = require('express');
const authc = require('../controller/auth.controller');
const authrouter = express.Router();

authrouter.post('/signup', authc.signup);
authrouter.post('/signin', authc.signin);
authrouter.post('/google', authc.google);
module.exports = authrouter;