const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
  const txs = await Transaction.find({ user: req.user.id });
  res.json(txs);
};

exports.addTransaction = async (req, res) => {
  const { type, amount } = req.body;
  const tx = new Transaction({ user: req.user.id, type, amount });
  await tx.save();
  res.json(tx);
};
