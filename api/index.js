// index.js (CommonJS syntax)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const urouter = require('./routes/user.route'); 
const authrouter = require('./routes/auth.route');
dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("server running on 3000");
});

app.use('/api/user', urouter);
app.use('/api/auth', authrouter);
