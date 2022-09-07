const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');

router.get('/',(req,res) => {
    const filterMessage = req.query.user || null;
    controller.getMessage(filterMessage)
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
        response.error(req, res, "invalid information", 400, e)
    })
})

router.patch('/:id', (req,res) => {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.text)
                .then((data) => {
                    response.success(req,res,data,200);
                })
                .catch(e => {
                    response.error(req,res,'Error inesperado',500,e);
                })
    //res.send('Ok');
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
                .then(()=> {
                    response.success(req,res,`User ${req.params.id} deleted`,200)
                })
                .catch(e => {
                    response.error(req, res, 'Internal Error', 500, e)
                })
});

module.exports = router;