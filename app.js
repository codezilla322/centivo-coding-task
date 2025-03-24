const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
require('dotenv').config();

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use('/users', usersRouter);

module.exports = app;