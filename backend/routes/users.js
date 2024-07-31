const User = require('../models/userModel');

const express = require('express');

const router = express.Router();

//controller
const {loginUser, signUpUser} = require('../controllers/userController');


//login route
router.post('/login',loginUser);

//signup route
router.post('/signup',signUpUser);

module.exports =  router;
