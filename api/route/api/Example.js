const express = require('express');
const router = express.Router() ;
const example = require('../../service/Example');


router.get('/:name/&key=:token',(req,res)=>{
    if (req.params.token === "admin" ) {
        let found = example.some(value => value.name === req.params.name)
        if(found){
            res.json(example.filter(value => value.name === req.params.name));
        }
        else{
            res.status(400).json({ msg : `no examples with name ${req.params.name}`})
        }
    }
    else{
        res.status(400).json({ msg : `access deny`})
    }
})

router.get('/&key=:token',(req,res)=>{
    if (req.params.token === "member") {
        res.json(example)
    }
    else{
        res.status(400).json({ msg : `access deny`})
    }
})

module.exports = router