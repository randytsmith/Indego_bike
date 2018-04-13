const dotenv = require('dotenv');

// initializing env variables
try {
  dotenv.config();
} catch (e) {
  console.log('Could not find .env file. Continuing..'); // eslint-disable-line
}

module.exports = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/indego-api',
  jwtSecret: process.env.JWT_SECRET || 'indego-api',
  jwtExpires: '30d',
};
