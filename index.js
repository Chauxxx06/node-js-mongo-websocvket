const express = require('express');
const router = require('./network/routes');
const db = require('./db');

db('mongodb://chaux:lolita2019.@192.168.109.131:27017/?authMechanism=DEFAULT');

const app = express();
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
//app.use(router);
router(app)


app.use('/app', express.static('public'));

app.listen(3000);
console.log('The app is listening in port 3000')