const express = require('express');
const router = express.Router() ;
const example = require('../../service/Example');


router.get('/:name',(req,res)=>{
    if (req.query.token_api === "la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=") {
        let found = example.some(value => value.name === req.params.name)
        if(found){
            res.json(example.filter(value => value.name === req.params.name));
        }
        else{
            res.status(404).json({ msg : `no examples with name ${req.params.name}`})
        }
    }
    else{
        res.status(404).json({ msg : `access deny`})
    }
})

router.get('/',(req,res)=>{
    if (req.query.token_api === "la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=") {
        res.json(example)
    }
    else{
        res.status(404).json({ msg : `access deny`})
    }
})

module.exports = router