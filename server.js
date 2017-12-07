#!/usr/bin/env node

const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
// Create the express app, router and request.s
const app = express();
const router = express.Router();
const request = require('request');
const session = require('express-session');

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://ec2-54-194-96-92.eu-west-1.compute.amazonaws.com:27017/owapi', { useMongoClient: true });
// Passport 
const passport = require('passport');
require('./src/config/passport')(passport);
//Routes
const passportRoutes = require('./src/routes/passportRoutes');
const userRoutes = require('./src/routes/userRoutes');
const playerRoutes = require('./src/routes/playerRoutes')

//Parser middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser()); // read cookies (needed for auth)

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-bundle.json'),
  {
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);

//REST API
//Passport
app.use(session({
  secret: 'moosebeatbois', 
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions 

router.post('/login', passport.authenticate('local-login', {

  successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/artist', // redirect back to the signup page if there is an error

}));
router.get('/logout', function (req, res) {
  console.log( "logout");
  req.logout();
  res.redirect('/');

});

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
}


// files routes will be prefixed with /static and served as static
app.use(express.static('./src/files'));
app.use('/static', express.static('./src/files'));

// routes will be prefixed with /api
app.use("/api", userRoutes);
app.use("/api",playerRoutes)
//app.use("/log", passportRoutes);
app.use("/", router);



app.use('/dist', express.static('dist'));

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({ url: req.path })
    .pipe(res);
});

// Bind the app to this port.
app.listen(process.env.PORT || 8080);