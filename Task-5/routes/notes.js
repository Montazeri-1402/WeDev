const express = require('express');
const router = express.Router(); // Corrected import statement
const notebooks = require('../data/notebooks');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(notebooks);  // Access the property on the instance, assuming noteBooksList is a public property
});

router.get('/deleteById', function (req, res, next) {
    const id = req.query.id;

    for (let i = 0; i < notebooks.length; i++) {
        if (notebooks[i].id === id) {
            notebooks.splice(i, 1);
        }
    }

    res.json(notebooks);
});


router.get('/deleteByIndex', function (req, res, next) {
    const index = req.query.index;

    notebooks.splice(index, 1);

    res.json(notebooks);
});

router.get('/editNote', function (req, res, next) {
    const id = req.query.id;
    const key = req.query.key;
    const value = req.query.value;

    for (let i = 0; i < notebooks.length; i++) {
        if (notebooks[i].id === id) {
            notebooks[i].bookName = value;
        }
    }

    res.json(notebooks);
});

router.get('/reNote', function (req, res, next) {
    const body = req.body;
    const id = req.query.id;

    for (let i = 0; i < notebooks.length; i++) {
        if (notebooks[i].id === id) {
            notebooks[i] = body;
        }
    }

    res.json(notebooks);
});

router.get('/getPage', function (req, res, next) {
    const index = req.query.index;
    const len = req.query.len;

    const list = [];

    for (let i = index; i < len; i++) {
        list.push(notebooks[i]);
    }

    res.json(list);
});


module.exports = router;
