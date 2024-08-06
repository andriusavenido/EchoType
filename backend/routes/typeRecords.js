const express = require('express');

const router = express.Router();

const {
    typeRecord_getAll,
    typeRecord_create,
    typeRecord_getById,
    typeRecord_delete,
    typeRecord_update,
    typeRecord_getLeaderboard
    
} = require('../controllers/typeRecordController') ;

const requireAuth = require('../middleware/requireAuth');

router.get('/lb', typeRecord_getLeaderboard);

//require auth for all workout routes
router.use(requireAuth);

//Get all records
router.get('/', typeRecord_getAll);

//Get a single record
router.get('/:id', typeRecord_getById);

//post a new workout
router.post('/', typeRecord_create);

//delete a workout
router.delete('/:id',typeRecord_delete);

//update a workout
router.patch('/:id', typeRecord_update );


module.exports = router;