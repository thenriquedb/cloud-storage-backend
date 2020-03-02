const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().server;