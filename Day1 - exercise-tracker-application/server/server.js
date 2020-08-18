const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB database connection established successfully."));

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Server satrted on ${PORT}`));
