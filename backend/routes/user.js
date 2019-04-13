const router = require('express').Router();
const config = require('../config/password')
const User = require('../models/User');
const transporter = require('../config/nodemailer');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const passport = require('passport')
const upload=require('../config/multer')

router.post('/signup', (req, res) => {
    jwt.sign({
        user: req.body.email
    }, config.EMAIL_SECRET, {
        expiresIn: '2d'
    }, (err, emailToken) => {
        if (err) return res.send(err)
        const url = `http://localhost:3001/user/confirmation/${emailToken}`
        transporter.sendMail({
            to: req.body.email,
            subject: 'Confirm your email in my Trello-MERN Full Stack app.',
            html: `<h3>Please click the following link to confirm your email:<br>
                <a href="${url}">Click here to confirm your email</a><br>
                    The link above will expire in 48 hours.</h3> `
        }).then(()=>{
            new User({
                ...req.body,
                imagePath:'/images/profile.png'
            }).save().then(user =>{
                req.flash('info', 'user succesfully created, please confirm your email ');
                 res.send(user)
            }).catch(err =>{
                req.flash('error', 'Email already in use, please choose another email');
                res.send(err)
            })
        }).catch(console.log)
    })
});
router.get('/confirmation/:token', (req, res) => {
    const email = jwt.verify(req.params.token, config.EMAIL_SECRET).user;
    User.findOne({ email }).then(userFound => {
        userFound.confirmed = true
        userFound.save().then(user => {
            req.login(userFound._id, err => {
                    req.flash('info', 'Congratulations! Your email account has been verified.');
                    res.send(user)
            })
        }).catch(console.log)
    }).catch(console.log)
})
router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(userFound => {
        if (!userFound) {
            req.flash('error','Email or password wrong');
            return res.redirect('/login');
        }
        if(!userFound.confirmed) {
            req.flash('warn','You should confirm your email to log in');
            return  res.redirect('/login');
        }
        bcrypt.compare(req.body.password, userFound.password).then(isMatch => {
            if (!isMatch){
                req.flash('error','Email or password wrong');
               return res.redirect('/login');
            }
            req.login(userFound._id, err => {
                res.send(err)
            })
        }).catch(err => res.send(err))
    })
});
router.post('/update',upload.single('image'),(req,res)=>{
     User.findOneAndUpdate(req.session.passport.user,{
        ...req.body,
        imagePath:req.file.filename
     }).then(user=>{
        req.flash('info', 'User successfully updated')
        res.send(user)
     }).catch(err=>console.log(err))
})
passport.serializeUser(function (user_id, done) {
    done(null, user_id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
module.exports = router;