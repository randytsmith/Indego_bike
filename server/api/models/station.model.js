import Weather from './weather.model';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StationSchema = new Schema({
  addressStreet: 'String',
  addressCity: 'String',
  addressState: 'String',
  addressZipCode: 'Number',
  bikesAvailable: 'Number',
  closeTime: 'Number',
  docksAvailable: 'Number',
  eventEnd: 'String',
  eventStart: 'String',
  isEventBased: 'Boolean',
  isVirtual: 'Boolean',
  isVisible: 'Boolean',
  kioskId: { type: 'Number', required: true },
  kioskPublicStatus: { type: 'String', required: true },
  kioskStatus: { type: 'String', required: true },
  name: { type: 'String', required: true },
  notes: 'String',
  openTime: 'Date',
  publicText: 'String',
  timeZone: 'String',
  totalDocks: 'Number',
  trikesAvailable: 'Number',
  kioskConnectionStatus: 'String',
  kioskType: 'Number',
  latitude: 'Number',
  longitude: 'Number',
  hasGeofence: 'Boolean',
  weather: { type: Schema.Types.ObjectId, ref: 'Weather' },
});

module.exports = mongoose.model('Station', StationSchema);
