const Meter = require('../models/meter.js');

exports.getMeters = async (req, res) => {
  const meters = await Meter.find({ user: req.user.id });
  res.json(meters);
};

exports.addMeter = async (req, res) => {
  const { meterNumber, location } = req.body;
  const meter = new Meter({ user: req.user.id, meterNumber, location });
  await meter.save();
  res.json(meter);
};
