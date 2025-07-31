const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { uid, name, email, password, profession, role, photoURL } = req.body;
    // Always use Firebase UID for tracking
    let user = await User.findOne({ uid });
    if (user) return res.status(400).json({ message: 'User already exists' });
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    user = await User.create({ uid, name, email, password: hashedPassword, profession, role, photoURL });
    res.status(201).json({ message: 'User registered successfully', user });
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.googleAuth = async (req, res) => {
  try {
    const { uid, name, email, photoURL, profession, role } = req.body;
    let user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({
        uid,
        name: name || '',
        email: email || '',
        photoURL: photoURL || '',
        profession: profession || 'unknown',
        role: role || 'surveyor',
        password: null // ensure password is set to null for Google users
      });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ message: 'Google user registered', user, token });
  } catch (error) {
    console.error('GoogleAuth error:', error); // log error for debugging
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};