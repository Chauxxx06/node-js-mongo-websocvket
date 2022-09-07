const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
    console.log(req.body.name);
    controller.addUser(req.body.name)
        .then((data) => {
             response.success(req, res, data, 201)
        })
        .catch( e => {
            response.error(req, res, 'Internal Errore', 500, e)
        })
})

router.get('/', (req, res) => {
    controller.getUser()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e)
        })
})

module.exports = router