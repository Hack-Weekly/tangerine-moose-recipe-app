require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello world!")
});

app.use('/api/user', require('./routes/user'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});