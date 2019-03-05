var mongoose = require('mongoose');

// StationData Schema
var StationDataSchema = mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum:['Point'],
      required: true
    },
    coordinates: {
      'type': [Number],
      'index': '2dsphere', // set the mongo index : 2d / 2dsphere
      'required': true
    }
  }
});

var StationData = module.exports = mongoose.model('StationData', StationDataSchema,'spoorwagenstation');

// Get StationData
module.exports.getStationData = function(callback, limit){
	StationData.find(callback).limit(limit).sort([['name', 'ascending']]);
}
