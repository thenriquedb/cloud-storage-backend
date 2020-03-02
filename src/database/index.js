const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
  }

};

module.exports = new Database();