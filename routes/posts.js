var express = require('express');
var router = express.Router();
let Post = require('../models/post');

router.get('/', (req, res) => {
    Post.find((err, arrPost) => {
        console.log(arrPost);
        res.json(arrPost);
    })
});

router.post('/create', (req, res) => {
    Post.create(req.body).then(post => {
        res.json(post);
    });
});

router.get('/edit/:idArticulo', (req, res) => {
    Post.findById(req.params.idArticulo, (err, post) => {
        res.json(post);
    });
});

router.get('/:idArticulo', (req, res) => {
    Post.findById(req.params.idArticulo, (err, post) => {
        if (err) return res.send('¡Error!');
        res.json(post);
    });
});

// Funciona la actualización del objeto usando Postman
router.put('/:idArticulo', (req, res) => {
    Post.findByIdAndUpdate(req.body.idArticulo, req.body, { new: true }, (err, post) => {
        res.json(post);
    });
});

router.delete('/:idArticulo', (req, res) => {
    Post.findByIdAndDelete(req.params.idArticulo, (err, post) => {
        res.json({ success: 'Se ha borrado correctamente' });
    });
});


module.exports = router;