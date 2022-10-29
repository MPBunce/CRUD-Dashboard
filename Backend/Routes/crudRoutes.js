const express = require('express');
const router = express.Router()
const { getItems, postItem, putItem, deleteItem } = require('../Controllers/itemController')

//Create and Read
router.route('/').get(getItems).post(postItem)

//Update and Delete
router.route('/:id').put(putItem).delete(deleteItem)

// //CREATE
// router.post('/', postItem)

// //READ
// router.get('/', getItems)

// //UPDATE
// router.put('/:id', putItem)

// //DELETE
// router.delete('/:id', deleteItem)


module.exports = router