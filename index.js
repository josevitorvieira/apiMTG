const express = require('express');
const cors = require('cors');
const card = require('./controller/cardController');

const api = express();

exports.start = ()=>{

     api.use(express.json());
     api.use(cors());
     api.use('/', card);

    api.listen(3000,()=>{
        console.log("Aplicação Iniciada!!!");
    })

}