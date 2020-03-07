const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { resolve } = require('path');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan('dev'));
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
    this.server.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
