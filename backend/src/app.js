const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./models/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/info', require('./routes/infoRoutes'));

module.exports = app;
