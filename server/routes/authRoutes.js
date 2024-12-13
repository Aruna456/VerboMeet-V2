const express = require('express');
const passport = require('passport');
const { getCurrentUser, logoutUser } = require('../controllers/authController');

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
        if (req.user && req.user.email === 'aaddmmiinn1704@gmail.com') {
      res.redirect('http://localhost:5173/adminhome');
    } else {
      res.redirect('http://localhost:5173/home');
    }
  }
);

router.get('/api/current_user', getCurrentUser);
router.get('/api/logout', logoutUser);

module.exports = router;
