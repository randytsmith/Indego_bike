import Station from './station.model';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
  _id: Schema.Types.ObjectId,
  stations: [{ type: Schema.Types.ObjectId, ref: 'Station' }],
  at: { type: 'Date', required: true },
  weather: { type: 'String', required: true },
});

module.exports = mongoose.model('Weather', WeatherSchema);
