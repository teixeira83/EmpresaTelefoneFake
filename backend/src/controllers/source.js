const Source = require('../models/Source');
const dbsDump = require('../config/database');

module.exports = {
    async getAllSources(req, res) {
        if(! await Source.exists()){
            await Source.insertMany(dbsDump);
        }     

        const documents = await Source.find();
        res.status(200).send(documents);
    }
}