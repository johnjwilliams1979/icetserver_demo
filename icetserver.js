const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8008;


// Middleware

app.use(bodyParser.json());


// MongoDB connection

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydb';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => console.log('Connected to MongoDB'))

.catch(err => console.log('MongoDB connection error:', err));


// Mongoose Schema

const DataSchema = new mongoose.Schema({

data: String

});


const DataModel = mongoose.model('Data', DataSchema);


// RESTful Endpoints start here...


/*

// POST endpoint

app.post('/data', async (req, res) => {

const newData = new DataModel({ data: req.body.data });

try {

await newData.save();

res.status(201).send('Data saved');

} catch (err) {

res.status(500).send(err);

}

});

*/


// GET endpoint

app.get('/data', async (req, res) => {

try {

const data = await DataModel.find();

res.status(200).json(data);

} catch (err) {

res.status(500).send(err);

}
});


// Start the server

app.listen(PORT, () => {

console.log(`Server is running on port ${PORT}`);

});