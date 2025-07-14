const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

// Static method to update user by ID
UserSchema.statics.updateById = function(id, update) {
  return this.findByIdAndUpdate(id, update, { new: true });
};

// Static method to delete user by ID
UserSchema.statics.deleteById = function(id) {
  return this.findByIdAndDelete(id);
};

module.exports = mongoose.model('User', UserSchema);
