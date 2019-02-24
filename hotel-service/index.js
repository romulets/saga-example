const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const hotelApp = require('./src/app/hotel');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(hotelApp);
app.listen(9002, () => console.info('Listening rest :9002'))
