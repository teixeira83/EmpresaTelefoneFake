const Source = require('../models/Source');
const {dbsDumpSources} = require('../config/database');

module.exports = {
    async getAllSources(req, res) {
        if(! await Source.exists()){
            await Source.insertMany(dbsDumpSources);
        }     

        const documents = await Source.find();
        res.status(200).send(documents);
    },

    async getSourceByTitle(req, res, origin) {

        if(origin) {
            if(! await Source.exists()){
                await Source.insertMany(dbsDumpSources);
            } 
            
            const document = await Source.findOne({ source: origin });
            return document;
        } else {
            const source = req.query.source;
            if(! await Source.exists()){
                await Source.insertMany(dbsDumpSources);
            }     
            
            const document = await Source.findOne({ source });
            res.status(200).send(document);
        }
    }
}
        
        