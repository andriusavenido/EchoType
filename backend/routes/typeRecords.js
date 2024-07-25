const express = require('express');

const router = express.Router();

const {
    typeRecord_getAll,
    typeRecord_create,
    typeRecord_getById
    
} = require('../controllers/typeRecordController') ;

//Get all records
router.get('/', typeRecord_getAll);

//Get a single record
router.get('/:id', typeRecord_getById)

//post a new workout
router.post('/', typeRecord_create);

//delete a workout

//update a workout


module.exports = router;