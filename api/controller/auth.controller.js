const User = require("../models/user.model");

module.exports.signup = async(req,res)=>{
    const {username, email, password} = req.body;
    const newuser = new User({username,email,password});
    try {
        await newuser.save();
        res.status(201).json("user created");
    } catch (error) {
        res.status(500).json(error.message);
    }
}