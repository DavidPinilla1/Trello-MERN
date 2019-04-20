const mongoose = require('mongoose')
const { pick } = require('lodash')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt');
const SALT_I = 9;
const jwt=require('jsonwebtoken')
const password=require('../config/password')

const PASS=password.SECRET;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate:function (email) {
      return new Promise(function(resolve) {
        setTimeout(function () {
          resolve(isEmail(email));
         }, 5)
      })
    },
    message:'the {VALUE} entered is not a valid email.'
  },
  confirmed: {
    type: Boolean,
    defaultValue: false
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  imagePath: String,
  
  tokens:[{
    token:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
}] } , {
  timestamps: true
});

UserSchema.methods.toJSON = function () {
  const user = this;
  return pick(user, ['_id', 'name','lastname', 'email'])
}

UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(SALT_I).then(salt => bcrypt.hash(user.password, salt).then(hash => {
      user.password = hash;
      return next();
    }).catch(err => next(err))).catch(err => next(err))
  } else next();
});
UserSchema.pre('findOneAndUpdate', function (next) {
  const user = this._update;
    bcrypt.genSalt(SALT_I).then(salt => bcrypt.hash(user.password, salt).then(hash => {
      console.log('hash: '+hash)
      console.log('user.password: '+user.password)
      user.password = hash;
      return next();
    }).catch(err => next(err))).catch(err => next(err))
});
UserSchema.methods.generateAuthToken=function(){
  const user=this;
const payload={
  _id:user._id,
  iat:Date.now()/1000,
  exp:Date.now()/1000+ 60*60*24*7 // will expire in 7 days 
}
const token=jwt.sign(payload,PASS)
console.log(token)
  user.tokens.push({
      token,
      type:'auth'
  });
  return user.save().then(()=>token);
}

const User = mongoose.model('user', UserSchema)

module.exports = User;