const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
},{collection: 'users'});

//static methods

//signup
userSchema.statics.signup = async function (email, username, password){

    //validate fields
    if (!email || !password || !username){
        throw Error('All fields must be filled');
    }
    if (!validator.isByteLength(username, {min:3, max:12})){
        throw Error('Invalid Username: must be between 3-12 characters');
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({email});

    if (exists){
        throw Error('Email already in use');
    }

    const userExists = await this.findOne({username});
    
    if (userExists){
        throw Error('Username in use')
    }

    //salt => adding random chars to pass word before hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //add to db
    const user = await this.create({email, username, password: hash});

    return user;
}

//login

userSchema.statics.login = async function (email, password){
    if (!email || !password){
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({email});

    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect Password');
    }

    return user;
}

module.exports = mongoose.model('User',userSchema);