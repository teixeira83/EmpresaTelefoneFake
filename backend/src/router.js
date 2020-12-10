const express = require('express');
const router = new express.Router();

const sourceController = require('./controllers/source');

router.get('/sources', sourceController.getAllSources);

module.exports = router;