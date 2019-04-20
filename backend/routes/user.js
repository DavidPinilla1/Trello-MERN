const router = require('express').Router();
const config = require('../config/password')
const User = require('../models/User');
const transporter = require('../config/nodemailer');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const passport = require('passport')
const upload=require('../config/multer')
const {authorization, isOwner}=require('../utils/middleware/authorization')
router.get('/all',authorization, (req, res) => {
    console.log(req.user)
    User.find({}).then(users => res.send(users)).catch(err => res.status(500).send(err))
})
router.get('/:user_id',authorization,isOwner, (req, res) => {
    User.findById(req.params.user_id).then(user => res.send(user)).catch(err => res.status(500).send(err))
})
router.post('/signup', (req, res) => {
    console.log(req.body)
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
                res.send({user,'info': 'user succesfully created, please confirm your email '})
            }).catch(err =>{
                res.send({err,'error':'Email already in use, please choose another email'})
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
                    res.send({user,'info':'Congratulations! Your email account has been verified.'})
            })
        }).catch(console.log)
    }).catch(console.log)
})
router.post('/login', (req, res) => {
    console.log(req.body.email)
    User.findOne({
        email: req.body.email
    }).then(userFound => {
        if (!userFound) {
            return res.send({message:'Email or password wrong'});
        }
        // if(!userFound.confirmed) {
        //     return res.send('error','Email or password wrong');
        // }
        bcrypt.compare(req.body.password, userFound.password).then(isMatch => {  
            console.log(userFound)
            // if (!isMatch){
            //     return res.status(400).send({message:'Email or password wrong'});
            // }
            userFound.generateAuthToken().then(token=>{
                res.header('Authorization',token).send(userFound)
            }).catch(console.log)
        }).catch(console.log)
    })
});
router.post('/update',upload.single('image'),(req,res)=>{
     User.findOneAndUpdate(req.body.email,{
        ...req.body,
        imagePath:req.file.filename
     }).then(user=>{
        res.send({user,'info':'User successfully updated'})
     }).catch(err=>console.log(err))
})
router.delete('/users/:user_id',authorization, (req, res) => {
    User.findByIdAndDelete(req.params.user_id).then(user => res.send(user)).catch(err => res.status(500).send(err))
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