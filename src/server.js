require('dotenv').config();
const app = require('./app');
require('./database');

app.listen(3333);
