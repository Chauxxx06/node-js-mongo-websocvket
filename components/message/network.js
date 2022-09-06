const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');

router.get('/',(req,res) => {
    controller.getMessage()
                .then((messageList) => {
                    response.success(req, res, messageList, 200)
                })
                .catch(e => {
                    response.success(req, res, 'Unexpected Error', 500, e)
                })
})

router.post('/',(req,res) => {
    //console.log(req.body);
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=> {
        response.success(req, res, fullMessage, '201')
    })
    .catch(e => {
        response.error(req, res, "invalid information", 400, 'error in controllers')
    })
})

module.exports = router;