const router = require('express').Router();
const { Book } = require('../models');

router.route('/')
    .get((req, res) => {
        
      Book
        .find({})
        .then(data => {
            console.log('SEARCH GET');
            console.log({ data })
            res.json({ success: true, data })
        })
        .catch(err => {
            console.log({ err });
            res.json({ success: false });
        })
    })
    .post((req, res) => {
        console.log({ reqBody: req.body });
        res.json({ success: true });
        
        Book
        .create({
            text: req.body.text
        })
        .then(data => {
            console.log({ data })
            res.json({ success: true, data })
        })
        .catch(err => {
            console.log({ err });
            res.json({ success: false });
        });
    });

router.route('/books')
    
router.route('/:id')
    .delete((req, res) => {
        console.log(req.params);
        res.json({ success: true });

        Todo
            .findByIdAndDelete(req.params.id)
            .then(data => {
                console.log({ data })
                res.json({ success: true });
            })
            .catch(err => {
                console.log({ err })
                res.json({ success: false });
            });
    });

    module.exports = router;