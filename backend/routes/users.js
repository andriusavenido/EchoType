const User = require('../models/userModel');

const express = require('express');

const router = express.Router();

//controller
const {user_login,user_signUp} = require('../controllers/userController');


//login route
router.post('/login',user_login);

//signup route
router.post('/signup',user_signUp);

module.exports =  router;
