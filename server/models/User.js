const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
  avatar: String,
  registeredDebates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Debate' }] 
});

module.exports = mongoose.model('User', UserSchema);
