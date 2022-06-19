const mongoose = require('mongodb')

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true,
        default: 0
    }
})

const List = mongoose.model('List', ListSchema)

module.exports = List;