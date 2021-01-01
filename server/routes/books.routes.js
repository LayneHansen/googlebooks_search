const router = require('express').Router();
const { Book } = require('../models');

router.route('/')
    .get((req, res) => {

      Book
        .find({})
        .then(data => {
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

router
    .route('/:id')
    .delete((req, res) => {

        Book
            .findByIdAndDelete(req.params.id)
            .then(data => {
                console.log({ data })
                res.json({ success: true });
            })
            .catch(err => {
                res.json({ success: false });
                console.log({ err })
            });
    });

    module.exports = router;