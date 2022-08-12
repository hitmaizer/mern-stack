const User = require('../models/userModel');

// login user
const login_user = async (req, res) => {
  res.json({ msg: 'Login user' });
};

// signup user
const signup_user = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login_user,
  signup_user,
};
