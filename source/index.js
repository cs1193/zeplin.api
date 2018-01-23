const server = require('./server');

process.on('uncaughtException', (error) => {
  console.log(new Error(error))
});

process.on('uncaughtRejection',  (error) => {
  console.log(new Error(error))
});
