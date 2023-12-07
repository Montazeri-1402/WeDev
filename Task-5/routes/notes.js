const express = require('express');
const router = express.Router();
const NoteClass = require('../data/Notebooks');  // Corrected import statement

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(NoteClass.noteBooksList);  // Access the property on the instance, assuming noteBooksList is a public property
});

router.get('/deleteById', function(req, res, next) {
    const id = req.query.id;
    console.log(">>>>>>> " + id);
    res.json(NoteClass.deleteNoteBookById(id));  // Corrected reference to the class
});

module.exports = router;
