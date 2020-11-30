var express = require("express");

var Livre = require("../models/Livre");
var router = express.Router();

router.get('/:id?', function(req, res, next){
    if(req.params.id){
        Livre.getLivreById(req.params.id, function(err, rows){
            if(err) {res.json(err)}
            else {res.json(rows)}
        })
    }
    else {
        Livre.getAllLivres(function(err, rows){
            if (err) {res.json(err)}
            else {res.json(rows)}
        })
    }
})

router.post("/", function(req, res, next){
    Livre.addLivre(req.body, function(err, count){
        if (err) {res.json(err)}
        else {res.json(req.body)
        //or return count for 1 &amp;amp;amp; 0 
    }
    })
})

router.delete("/:id", function(req, res, next){
    Livre.deleteLivre(req.params.id, function(err, count){
        if (err) {res.json(err)}
        else {res.json(count)}
    })

})

router.put("/:id", function(req, res, next){
    Livre.updateLivre(req.params.id, req.body, function(err, rows){
        if(err) {res.json(err)}
        else {res.json(rows)}
    })

})


module.exports = router;


