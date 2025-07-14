const mongoose = require('mongoose');

const MeterSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  meterNumber: String,
  location: String,
  status: { type: String, default: 'active' },
});

module.exports = mongoose.model('Meter', MeterSchema);
