const express = require('express');
const stockController = require('./controllers/controllers');
const routes = express.Router();




routes.get('/stock', stockController.index);
routes.get('/stock/:id', stockController.show);
routes.post('/stock', stockController.store); 
routes.put('/stock/:id', stockController.update);
routes.delete('/stock/:id', stockController.destroy);

module.exports = routes;
