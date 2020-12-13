const express = require('express');
const router = new express.Router();

const sourceController = require('./controllers/source');
const planController = require('./controllers/plan');
const calculatorController = require('./controllers/calculator');

router.get('/sources', sourceController.getAllSources);

router.get('/source', sourceController.getSourceByTitle);

router.get('/calculator', calculatorController.getCallInformation)

router.get('/plans', planController.getAllPlans)

module.exports = router;