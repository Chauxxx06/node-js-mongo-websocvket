const express = require('express');
const app = express();
const server = require('http').Server(app);
const router = require('./network/routes');
const db = require('./db');
const socket = require('./socket');

db('mongodb://chaux:lolita2019.@192.168.109.131:27017/?authMechanism=DEFAULT');


app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
socket.connect(server);
router(app)


app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log('The app is listening in port 3000')
});