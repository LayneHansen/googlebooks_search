const router = require('express').Router();
const booksController = require('../controllers/bookController');
const { Search } = require('../models');

router.route('/')
    .get((req, res) => {
    //   Search
    //     .find({})
    //     .then(data => {
    //         console.log('SEARCH GET');
    //         console.log({ data })
    //         res.json({ success: true, data })
    //     })
    //     .catch(err => {
    //         console.log({ err });
    //         res.json({ success: false });
    //     })
        console.log('hit the get route in /api/search');
        res.json({ search: "find a good book" });
    })
    .post((req, res) => {
        console.log({ reqBody: req.body });
        res.json({ success: true });
        
        Search
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