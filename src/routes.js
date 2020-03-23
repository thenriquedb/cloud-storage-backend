const { Router } = require('express');
const multer = require('multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const FileController = require('./app/controllers/FileController');

const authMiddleware = require('./app/middlewares/auth');

const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const routes = Router();

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

// Rotas autenticadas
routes.use(authMiddleware);
routes.get('/users/:id', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files', FileController.index);
routes.delete('/files/:id', FileController.delete);

module.exports = routes;
