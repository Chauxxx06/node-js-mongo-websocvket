const express = require('express');
const router = express.Router();

const message = require('../components/message/network');

const routes = (server) => {
    server.use('/message', message)
}

module.exports = routes