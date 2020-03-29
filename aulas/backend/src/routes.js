const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const route = express.Router();

route.post('/session', SessionController.create);

route.get('/ongs', OngController.index);
route.post('/ongs', OngController.create);

route.get('/incidents', IncidentController.index);
route.post('/incidents', IncidentController.create);
route.delete('/incidents/:id', IncidentController.delete);

route.get('/profile', ProfileController.index);

module.exports = route;