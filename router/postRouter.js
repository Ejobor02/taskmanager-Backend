const express = require ('express');
const router = express.Router();
const {create_task,get_all_task,update_task,delete_task} = require ('../controller/postController.js')


// Create
router.post('/create',create_task);

// Get all 
router.get('/getAll',get_all_task);

// Update

router.patch('/update/:postId',update_task);

// Delete
router.delete('/delete/:postID',delete_task);

module.exports = router;