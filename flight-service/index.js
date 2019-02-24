const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const flightApp = require('./src/app/flight');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(flightApp);
app.listen(9000, () => console.info('Listening rest :9000'))
