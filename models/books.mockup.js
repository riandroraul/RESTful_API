const mongoose = require('mongoose')

// membuat schema

const BookMockup = mongoose.model('BookMockup', {
    namaBuku: {
        type: String,
        required: true
    },
    penerbit: {
        type: String,
        required: true
    },
    pengarang: {
        type: String,
        required: true
    }
});

module.exports = BookMockup;