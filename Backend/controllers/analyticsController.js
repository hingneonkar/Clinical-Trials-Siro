// controllers/analyticsController.js
const mongoose = require('mongoose');
const NodeCache = require('node-cache');





// Create a cache instance with a TTL (time-to-live) of 600 seconds (10 minutes)
const cache = new NodeCache({ stdTTL: 600 });

// Get locations grouped by country
exports.getLocations = async (req, res) => {
  try {
    const cacheKey = 'locations'; // Define a key for caching
    const cachedData = cache.get(cacheKey); // Check if data is cached

    if (cachedData) {
      console.log('Returning cached data for locations');
      return res.json(cachedData); // Return cached data if available
    }

    const result = await mongoose.connection.db.collection('clinicalTrials').aggregate([
      { $unwind: "$protocolSection.contactsLocationsModule.locations" },
      { $group: { _id: "$protocolSection.contactsLocationsModule.locations.country", count: { $sum: 1 } } }
    ]).toArray();


    // Cache the result before sending the response
    cache.set(cacheKey, result);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get participant demographics grouped by sex
exports.getDemographics = async (req, res) => {
  try {
    const cacheKey = 'demographics'; // Define a key for caching
    const cachedData = cache.get(cacheKey); // Check if data is cached
    if (cachedData) {
      console.log('Returning cached data for demographics');
      return res.json(cachedData); // Return cached data if available
    }

    const result = await mongoose.connection.db.collection('clinicalTrials').aggregate([
      { $group: { _id: "$protocolSection.eligibilityModule.sex", count: { $sum: 1 } } },
      { $match: { _id: { $ne: null } } } // Ensure no null values
    ]).toArray();

    // Further filter any residual null values
    const filteredResult = result.filter(item => item._id !== null);

    // Cache the result before sending the response
    cache.set(cacheKey, filteredResult);
    res.json(filteredResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get trials per city, limited to top 10 cities
exports.getTrialsPerCity = async (req, res) => {
  try {
    const cacheKey = 'trialsPerCity'; // Define a key for caching
    const cachedData = cache.get(cacheKey); // Check if data is cached
    if (cachedData) {
      console.log('Returning cached data for trialsPerCity');
      return res.json(cachedData); // Return cached data if available
    }

    const result = await mongoose.connection.db.collection('clinicalTrials').aggregate([
      { $unwind: "$protocolSection.contactsLocationsModule.locations" },
      { $group: { _id: "$protocolSection.contactsLocationsModule.locations.city", count: { $sum: 1 } } },
      { $match: { _id: { $ne: null } } }, // Filter out null values
      { $sort: { count: -1 } },
      { $limit: 50 }
    ]).toArray();

    // Cache the result before sending the response
    cache.set(cacheKey, result);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// paginations api
exports.getOfficialsList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;  // Get the page number from query parameters or default to 1
    const limit = parseInt(req.query.limit) || 10;  // Get the limit from query parameters or default to 10
    const skip = (page - 1) * limit;  // Calculate the number of documents to skip

    const totalDocs = await mongoose.connection.db.collection('clinicalTrials').countDocuments({
      "protocolSection.contactsLocationsModule.overallOfficials.name": { $exists: true }
    });

    const result = await mongoose.connection.db.collection('clinicalTrials').aggregate([
      { $unwind: "$protocolSection.contactsLocationsModule.overallOfficials" },
      { $unwind: "$protocolSection.contactsLocationsModule.locations" },
      { $project: {
          _id: 0, // Exclude the _id field
          name: "$protocolSection.contactsLocationsModule.overallOfficials.name",
          affiliation: "$protocolSection.contactsLocationsModule.overallOfficials.affiliation",
          city: "$protocolSection.contactsLocationsModule.locations.city",
          country: "$protocolSection.contactsLocationsModule.locations.country",
          facility: "$protocolSection.contactsLocationsModule.locations.facility"
        }
      },
      { $skip: skip },  // Skip the required number of documents
      { $limit: limit }  // Limit the number of documents
    ]).toArray();

    res.json({
      data: result,
      page: page,
      limit: limit,
      totalDocs: totalDocs,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
