const User = require('../models/user.js');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.deleteProfile = async (req, res) => {
  const user = await User.deleteById(req.user.id);
  res.json({message: 'User deleted successfully', user });
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.updateById(req.user.id, { name, email });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
}