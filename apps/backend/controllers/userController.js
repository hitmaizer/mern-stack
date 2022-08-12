const User = require('../models/userModel');

// login user
const login_user = async (req, res) => {
  res.json({ msg: 'Login user' });
};

// signup user
const signup_user = async (req, res) => {
  res.json({ msg: 'Signup user' });
};

module.exports = {
  login_user,
  signup_user,
};
