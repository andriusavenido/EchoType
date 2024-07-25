const express = require('express');

const router = express.Router();

const {
    typeRecord_getAll
} = require('../controllers/typeRecordController') ;

//Get all records
router.get('/', typeRecord_getAll);

//Get a single record

//create record
router.get('/create', typeRecord_getAll);

//
module.exports = router;