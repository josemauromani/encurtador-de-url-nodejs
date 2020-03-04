const mongoose = require('mongoose')
const shortId = require('shortid')

const encurtaUrlSchema = new mongoose.Schema({
    urlOriginal: {
        type: String,
        required: true
    },
    urlEncurtada: {
        type: String,
        required: true,
        default: shortId.generate
    },
    acessos: {
        type: Number,
        required: true,
        default:0
    }
})

module.exports = mongoose.model('encurtaUrlSchema',encurtaUrlSchema)