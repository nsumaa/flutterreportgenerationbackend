const express = require('express');
const router = express.Router();
const { uploadPdf, getMyPdfs } = require('../controllers/pdfController');
const auth = require('../middleware/auth'); 

router.post('/upload', auth, uploadPdf);   
router.get('/my-pdfs', auth, getMyPdfs);    

module.exports = router;
