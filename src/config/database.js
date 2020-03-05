module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'dropbox-clone',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};