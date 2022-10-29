const asyncHandler = require('express-async-handler')

//READ
const getItems = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Response'})
})

//CREATE
const postItem = asyncHandler(async (req, res) => {

    if(!req.body.text) {
        res.status(400) //.json({message: "Please add text"})
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Create Response'})
})

//UPDATE
const putItem = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update item ${req.params.id}`})
})

//DELETE
const deleteItem = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete item ${req.params.id}`})
})

module.exports = {
    getItems,
    postItem,
    putItem,
    deleteItem
}