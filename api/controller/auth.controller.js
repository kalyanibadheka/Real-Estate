const User = require("../models/user.model.js");
const errorHandler = require('../utils/error.js');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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


module.exports.signin = async(req,res,next) => {
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'user not found'));
        const validpass = bcrypt.compareSync(password,validUser.password);
        if(!validpass) return next(errorHandler(401,'Wrong Credentials!')); 
        const token = jwt.sign({id: validUser.id},process.env.JWT_SECRET);
        const {password:pass , ...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
    } catch (error) {
          
    }   
}