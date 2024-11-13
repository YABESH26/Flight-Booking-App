import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Flight from './models/Flight.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI (Replace with actual URI from MongoDB Atlas)
//const mongoURI = 'mongodb+srv://preepsurendar874:MCtwapWnZ3THnvBs@cluster0.ip3yu.mongodb.net/flight_booking?retryWrites=true&w=majority';
const mongoURI= "mongodb+srv://Flightbookingapp:Surendar123@onlinebookstore.6ib1q.mongodb.net/flight_booking?retryWrites=true&w=majority&appName=Onlinebookstore"

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    if (err.name === 'MongoNetworkError') {
      console.error('Network error: Unable to connect to MongoDB');
    } else {
      console.error('Error connecting to MongoDB:', err);
    }
  });

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to SkyAirlines backend!');
});

// Route to add a flight
app.post('/api/flights', async (req, res) => {
  const { flightNumber, origin, destination, price, takeOffTime, landingTime, airline, seats, class: flightClass } = req.body;

  try {
    const newFlight = new Flight({
      flightNumber,
      origin,
      destination,
      price,
      takeOffTime,
      landingTime,
      airline,
      seats,
      class: flightClass,
    });

    await newFlight.save();

    res.status(201).json({ message: 'Flight added successfully!' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error adding flight', error: err.message });
  }
});


// Route to get all flights
app.get('/api/flights', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching flights', error: err.message });
  }
});

//end of add filght routes

// Route to search flights
app.get('/api/flights/search', async (req, res) => {
  const { origin, destination } = req.query;
  try {
    const flights = await Flight.find({
      $or: [
        { origin: origin.toLowerCase(), destination: destination.toLowerCase() },
        { origin: destination.toLowerCase(), destination: origin.toLowerCase() },
      ],
    });

    if (flights.length > 0) {
      res.status(200).json(flights);
    } else {
      res.status(404).json({ message: 'No flights available for the selected criteria' });
    }
  } catch (err) {
    console.error('Error searching for flights:', err);
    res.status(500).json({ message: 'Server error while searching flights', error: err.message });
  }
});


// Server setup
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});