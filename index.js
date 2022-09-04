const express = require('express');
const router = express.Router(); // modulo para rutear en express
const response = require('./network/response');

const app = express();
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use(router);


router.get('/message',(req,res) => {
    console.log(req.headers)
    res.header({ "custom-header": "value custom" })
    console.log(req.query)
    //res.send('list of messaje');
    response.success(req, res, 'lista de mensajes');
})

router.post('/message',(req,res) => {
    console.log(req.body)
    if(req.query.error == "ok"){
        response.error(req, res, "error Simulado", 500)
    } else {
        // res.status(201);
        // .send({
        //     "error": '',
        //     "message": 'message added correctly'
        // })
        response.success(req,res, "Create succesfully", 201)
    }
})

router.delete('/message',(req,res) => {
    res.status(201).send()
})

// app.use('/',(req, res) => {
//     res.send('Holis');
// });

app.listen(3000);
console.log('The app is listening in port 3000')