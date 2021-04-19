const express = require('express');
const router = express.Router() ;
const example = require('../../service/Example');


router.get('/:name',(req,res)=>{
    let found = example.some(value => value.name === req.params.name)
    if(found){
        res.json(example.filter(value => value.name === req.params.name));
    }
    else{
        res.status(400).json({ msg : `no examples with name ${req.params.name}`})
    }
})

router.get('/',(req,res)=>res.json(example))

module.exports = router