const express = require('express');
const requestController = require('../../app/controllers/RequestController');

const router = express.Router();

router.post('/process-request', requestController.processRequest);

module.exports = router;