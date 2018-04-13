import Station from '../models/station.model';
import Weather from '../models/weather.model';

function getAllStation(req, res) {
  Weather.findOne({ at: req.query.at }).populate('stations').exec((err, weather) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({
      at: weather.at,
      stations: weather.stations,
      weather: weather.weather });
  });
}

function getOneStation(req, res) {
  Station.findOne({ kioskId: req.params.id }).populate('weather').exec((err, stations) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({
      at: stations.weather.at,
      station: stations,
      weather: stations.weather,
    });
  });
}

function getAllTime(req, res) {

}
module.exports = {
  getOneStation,
  getAllStation,
  getAllTime,
};
