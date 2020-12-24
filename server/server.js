const express = require('express');
const routes = require('./routes');
const path = require('path');
const { mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
require('./config/db')();

// Middlware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// Connect to Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "")

// Static Assets
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

// Start Server
app.listen(PORT, () => {
    console.log("app running on " + PORT);
})