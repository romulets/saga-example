const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const carApp = require('./src/app/car');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(carApp);
app.listen(9001, () => console.info('Listening rest :9001'))
