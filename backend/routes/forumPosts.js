const express = require('express');

const router = express.Router();

const {
    forumPost_create,
    //forumPost_getById,
    //forumPost_delete,
    forumPost_getAll
    
} = require('../controllers/forumPostController') ;

const requireAuth = require('../middleware/requireAuth');

router.get('/fp', forumPost_getAll);

//require auth for all workout routes
router.use(requireAuth);

//post a new workout
router.post('/', forumPost_create);

//delete a workout
//router.delete('/:id',forumPost_delete_delete);

//update a workout
//router.patch('/:id', typeRecord_update );


module.exports = router;