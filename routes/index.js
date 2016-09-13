var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('signup.ejs', { message: req.flash('loginMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', { user: req.user });
});

router.get('/static/home', isLoggedIn, function(req, res) {
  res.render('static/home.ejs', { user: req.user });
});

router.get('/static/about', isLoggedIn, function(req, res) {
  res.render('static/about.ejs', { user: req.user });
});

router.get('/static/portfolio', isLoggedIn, function(req, res) {
  res.render('static/portfolio.ejs', { user: req.user });
});

router.get('/static/resume', isLoggedIn, function(req, res) {
  res.render('static/resume.ejs', { user: req.user });
});

router.get('/static/contact', isLoggedIn, function(req, res) {
  res.render('static/contact.ejs', { user: req.user });
});


router.get('/logout', function(req, res) {
  req.logout();
  delete req.session;
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/profile',
  failureRedirect: '/',
}));


module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
