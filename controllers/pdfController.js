const PDF = require('../models/pdf');

exports.uploadPdf = async (req, res) => {
  const { url } = req.body;
  try {
    const pdf = await PDF.create({ url, user: req.userId });
    res.status(201).json(pdf);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyPdfs = async (req, res) => {
  try {
    const pdfs = await PDF.find({ user: req.userId }).sort({ uploadedAt: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
