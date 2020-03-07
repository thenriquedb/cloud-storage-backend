require('dotenv').config();
require('./database');

const app = require('./app');

app.listen(3333);
