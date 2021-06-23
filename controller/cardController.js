//rotas
const express =require('express');
const router = express.Router();

const services = require('../services/cardServices');

const nameRoute ='/card';

router.get(nameRoute + '/:id', async(req,res)=>{
    const {id} = req.params;
    let response = await services.getById(id);
    res.status(response.status).json(response.message);
})

router.get(nameRoute, async(req,res)=>{
    let response = await services.getAll();
    res.status(response.status).json(response.message);
})

module.exports = router;