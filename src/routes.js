const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }));

routes.post('/session', SessionController.store);

routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

module.exports = routes;
