const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true},
    author: {
        type: String,
        required: true},
    description: {
        type: String,
        required: true},
    image: {
        type: String,
        required: true},
    link: {
        type: String,
        required: true}
});

const Search = mongoose.model('Search', SearchSchema)

module.exports = Search;