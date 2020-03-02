const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../app/models/User");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    User.init(this.connection);
  }
}

module.exports = new Database();
