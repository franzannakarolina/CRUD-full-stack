const mongoose = require('../database')

mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose