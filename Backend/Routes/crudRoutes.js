const express = require('express');
const router = express.Router()

//CREATE
router.post('/', (req, res) => {
    res.status(200).json({message: 'Create Response'})
})

//READ
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Response'})
})

//UPDATE
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update item ${req.params.id}`})
})

//DELETE
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete item ${req.params.id}`})
})


module.exports = router