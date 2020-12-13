const Plan = require('../models/Plan');
const { dbsDumpPlans } = require('../config/database');

module.exports = {
    async getAllPlans(req, res) {
        if(! await Plan.exists()){
            await Plan.insertMany(dbsDumpPlans);
        }     

        const documents = await Plan.find();
        res.status(200).send(documents);
    }
}