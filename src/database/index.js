const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const File = require('../app/models/File');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    User.init(this.connection);
    File.init(this.connection);

    File.associate(this.connection.models);
  }
}

module.exports = new Database();
