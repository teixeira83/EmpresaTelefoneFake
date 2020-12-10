const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
    source: String,
    destinations: [ String ],
    taxs: [Number]
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;