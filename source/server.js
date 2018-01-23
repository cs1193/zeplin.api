const app = require('./app');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
