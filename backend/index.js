require('./config');
const express = require('express')
const app = express();
const port = process.env.PORT || 3001;
const router = require('./routes');
const path = require('path')
const config = require('./config/password')
const userRoutes = require('./routes/user')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const flash = require('express-flash')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('tiny'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());
// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.isAuthenticated();
//   res.locals.session = req.session;
//   console.log(req.locals)
//   next();
// })
app.use('/user', userRoutes)
app.use(router);


app.listen(port, () => console.log('Servidor levantado en ' + port));