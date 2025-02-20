const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/landRental', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Land Rental Schema with Contact Number
const landSchema = new mongoose.Schema({
  name: String,
  location: String,
  size: Number,
  price: Number,
  description: String,
  contactNumber: String,  // Added contact number field
});

// Create a model
const Land = mongoose.model('Land', landSchema);

// POST route to submit land details
app.post('/api/land', async (req, res) => {
  const { name, location, size, price, description, contactNumber } = req.body;

  const newLand = new Land({
    name,
    location,
    size,
    price,
    description,
    contactNumber, // Save contact number
  });

  
    await newLand.save();
    console.log(newLand);
    
});

// GET route to fetch all land details
app.get('/api/lands', async (req, res) => {
  try {
    const lands = await Land.find();
    res.json(lands);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching land details' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
