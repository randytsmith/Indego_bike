import mongoose from 'mongoose';
import Station from './api/models/station.model';
import Weather from './api/models/weather.model';

export default function () {
  Weather.count().exec((err, count) => {
    if (count > 0) {
      console.log('first error');
      return;
    }

    const weather1 = new Weather({
      _id: new mongoose.Types.ObjectId(),
      at: new Date('2017-11-01T11:00:00'),
      weather: 'cloudy',
    });

    const station1 = new Station({
      kioskId: 3004,
      kioskPublicStatus: 'Active',
      kioskStatus: 'FullService',
      name: 'Municipal Services Building Plaza',
      weather: weather1._id,
    });

    const station2 = new Station({
      kioskId: 3005,
      kioskPublicStatus: 'Active',
      kioskStatus: 'FullService',
      name: 'Welcome Park, NPS',
      weather: weather1._id,
    });

    station1.save((err) => {
      if (err) {
        console.log('===========this is here');
      }
    });


    station2.save((err) => {
      if (err) {
        console.log('===========this is here');
      }
    });

    weather1.stations.push(station1);
    weather1.stations.push(station2);

    weather1.save((er) => {
      if (er) {
        console.log('weather error==========');
      }


    //
    // Weather.create(weather1, (error) => {
    //   if (!error) {
    //     console.log('ready to go....');
    //   }
    });
  });
}
