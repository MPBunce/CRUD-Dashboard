//READ
const getItems = (req, res) => {
    res.status(200).json({message: 'Get Response'})
}

//CREATE
const postItem = (req, res) => {
    res.status(200).json({message: 'Create Response'})
}

//UPDATE
const putItem = (req, res) => {
    res.status(200).json({message: `Update item ${req.params.id}`})
}

//DELETE
const deleteItem = (req, res) => {
    res.status(200).json({message: `Delete item ${req.params.id}`})
}

module.exports = {
    getItems,
    postItem,
    putItem,
    deleteItem
}