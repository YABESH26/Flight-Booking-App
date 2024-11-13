import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  takeOffTime: {
    type: Date,
    required: true,
  },
  landingTime: {
    type: Date,
    required: true,
  },
  airline: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    enum: ['Economy', 'Business', 'First Class'],
    required: true,
  },
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;