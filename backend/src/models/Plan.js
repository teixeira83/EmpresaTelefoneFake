const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    title: String,
    description: String,
    minutes: Number,
    tax: Number
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;