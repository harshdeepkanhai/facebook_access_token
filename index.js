const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = require('./config/config');

const PORT = process.env.PORT || config.port;

require('./router/router')(app);

const server = app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

server.setTimeout(40 * 1000);
