const mongoose = require('mongoose')

// membuat schema

const Book = mongoose.model('Book', {
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

module.exports = Book;