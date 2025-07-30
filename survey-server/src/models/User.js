const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false, default: "" },
  profession: { type: String, required: false, default: "" },
  role: { type: String, enum: ['surveyor', 'publisher'], default: 'publisher' },
  createdAt: { type: Date, default: Date.now },
  uid: { type: String },
  photoURL: { type: String },
}, { collection: 'users' });

module.exports = mongoose.model('users', userSchema);