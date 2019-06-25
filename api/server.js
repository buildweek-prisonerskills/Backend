const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const facilityRouter = require('../api/facility-router.js'); 
const inmateRouter = require('../api/inmate-router.js');
const userRouter = require('./users-router.js');

const server = express();

// middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

// routes
server.use('/api/auth', authRouter);
server.use('/api/facilities', facilityRouter);
server.use('/api/inmates', inmateRouter);
server.use('/api/users', userRouter);

// sanity check route 
server.get('/', (req, res) => {
      res.send(`<h2>Prisoner Skills Apps</h2>`)
      
});

module.exports = server;