const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Search = mongoose.model('Search', SearchSchema);

module.exports = Search;