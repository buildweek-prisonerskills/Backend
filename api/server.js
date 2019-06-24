const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// sanity check route 
server.get('/', (req, res) => {
      res.send(`<h2>nailed it!</h2>`)
      
});

module.exports = server;