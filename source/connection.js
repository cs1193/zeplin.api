const mongoose = require('mongoose');

const connectionString =  `mongodb://${process.env.DATASTORE_HOST}:${process.env.DATASTORE_PORT}/${process.env.DATASTORE_NAME}`;

const connection = mongoose.createConnection(`${connectionString}`);

connection.on('connected', () => {
  console.log(`Mongoose connection open to ${connectionString}`);
});

connection.on('error', (error) => {
  console.log(`Mongoose connection error ${error}`);
});

connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

process.on('SIGINT', () => {
  connection.close(() => {
    console.log('Mongoose connection disconnected through process termination');
    process.exit(0);
  });
});

module.exports = connection;
