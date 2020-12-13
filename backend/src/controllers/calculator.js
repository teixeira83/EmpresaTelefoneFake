const sourceController = require('./source');

module.exports = {
    async getCallInformation(req, res) {
        const { source, destination } = req.query;
        const callTime = parseInt(req.query.callTime);
        const plan = parseInt(req.query.plan);

        const sourceObjectReq = {
            source,
            destination,
            callTime,
            plan
        }
        
        const sourceInformation = await sourceController.getSourceByTitle(req, res, sourceObjectReq.source);
        const destinationList = sourceInformation.destinations;
        const taxList = sourceInformation.taxs; 
        
        const indexComparation = destinationList.indexOf(sourceObjectReq.destination);
        
        const surpluTime = callTime - plan;
        const callTax = parseFloat(taxList[indexComparation]);
        const minutesInMoneyValue = parseFloat(surpluTime * callTax);
        const minutesInMoneyValueWithSurpluTax = (minutesInMoneyValue + ( minutesInMoneyValue * 0.10 )).toFixed(2);
        
        
        res.status(200).send({
            callValue: minutesInMoneyValueWithSurpluTax
        });
        
    }
};