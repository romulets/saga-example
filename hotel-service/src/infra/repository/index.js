const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotel', {useNewUrlParser: true});

module.exports.buildModel = mongoose.model