const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('pdf', pdfSchema);
