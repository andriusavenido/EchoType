const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'} );
}

// login user
const user_login = async (req,res) =>{
    const { email, password } = req.body;

    try{
        const user = await User.login(email,password);
        //create token
        const token = createToken(user._id);
        const username = user.username;


        res.status(200).json({email, username, token});

    } catch(error) {
        res.status(400).json({error: error.message});

    }
}

//signup user

const user_signUp = async (req,res) =>{
    const {email, username, password} = req.body;
    
    try{
        const user = await User.signup(email, username, password);

        //create token
        const token = createToken(user._id);

        res.status(200).json({email, username, token});

    } catch(error) {
        console.log(error);
        res.status(400).json({error: error.message});

    }
}

module.exports = {user_login,user_signUp};