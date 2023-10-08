const User = require("../models/user.model");
const bcrypt = require("bcryptjs")

module.exports.signup = async(req,res,next)=>{
    const {username, email, password} = req.body;
    const hashedpass = bcrypt.hashSync(password,10);
    const newuser = new User({username,email,password:hashedpass});

    try {
        await newuser.save();
        res.status(201).json("user created");
    } catch (error) {
        next(error);
    }
}