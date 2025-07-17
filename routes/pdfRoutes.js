const express = require('express');
const router = express.Router();
const Pdf = require('../models/pdf');
const auth = require('../middleware/auth'); // make sure auth middleware exists

// POST /api/pdf - Save PDF URL
router.post('/store-pdf', async (req, res) => {
  const { email, pdfUrl } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.pdfs.push({ url: pdfUrl, uploadedAt: new Date() }); // Adjust schema accordingly
    await user.save();

    res.status(200).json({ message: "PDF URL saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
