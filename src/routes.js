const { Router } = require('express');
const UserController = require('./app/controllers/UserController');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }));
routes.post('/users', UserController.store);

module.exports = routes;
