const mongoose = require('mongoose');

const clinicalTrialSchema = new mongoose.Schema({
  protocolSection: {
    eligibilityModule: {
      sex: String,
      minimumAge: String,
      maximumAge: String
    },
    contactsLocationsModule: {
      overallOfficials: [{
        name: String,
        affiliation: String
      }],
      locations: [{
        facility: String,
        city: String,
        zip: String,
        country: String
      }]
    }
  }
});

const ClinicalTrial = mongoose.model('ClinicalTrial', clinicalTrialSchema);

module.exports = ClinicalTrial;
