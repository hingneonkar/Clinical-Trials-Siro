// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const analyticsRoutes = require('./routes/analytics');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Use analytics routes
app.use('/api/analytics', analyticsRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
