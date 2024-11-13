// const express = require('express');
// const router = express.Router();
// const Flight = require('../models/Flight');

// // Route to get all flights (for testing)
// router.get('/flights', async (req, res) => {
//   try {
//     const flights = await Flight.find();
//     res.json(flights);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Route to search flights by origin and destination
// router.post('/search', async (req, res) => {
//   const {
//     from,
//     to,
//     departDate,
//     returnDate,
//     travelers,
//     nearbyAirports,
//     directFlights
//   } = req.body;

//   try {
//     let query = {
//       origin: from,
//       destination: to,
//       departureDate: { $gte: new Date(departDate) }
//     };

//     if (returnDate) {
//       query.returnDate = { $gte: new Date(returnDate) };
//     }

//     if (directFlights) {
//       query.stops = 0;
//     }

//     if (nearbyAirports) {
//       // Implement nearby airport logic here
//       // This might involve expanding the origin and destination to include nearby airports
//     }

//     // Parse travelers string to get cabin class
//     const cabinClass = travelers.split(', ').pop();
//     if (cabinClass) {
//       query.class = cabinClass;
//     }

//     const flights = await Flight.find(query);
//     res.json(flights);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
