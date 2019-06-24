const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restricted = require('../auth/auth-middleware');

const authRouter = require('../auth/auth-router.js');
const facilityRouter = require('../api/facility-router.js'); 
// const prisonerRouter = require()

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api', facilityRouter);



// sanity check route 
server.get('/', (req, res) => {
      res.send(`<h2>Prisoner Skills Apps</h2>`)
      
});

module.exports = server;