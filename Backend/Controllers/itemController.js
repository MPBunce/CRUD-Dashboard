const asyncHandler = require('express-async-handler')
const Crud = require('../Models/crudModel')

//READ
const getItems = asyncHandler(async (req, res) => {
    const cruds = await Crud.find()
    res.status(200).json(cruds)
})

//CREATE
const postItem = asyncHandler(async (req, res) => {

    if(!req.body.name) {
        res.status(400) //.json({message: "Please add text"})
        throw new Error('Please add a name')
    }

    if(!req.body.job) {
        res.status(400) //.json({message: "Please add text"})
        throw new Error('Please add a job')
    }

    if(!req.body.age) {
        res.status(400) //.json({message: "Please add text"})
        throw new Error('Please add an age')
    }

    const crud = await Crud.create({
        name: req.body.name,
        job: req.body.job,
        age: req.body.age
    })

    res.status(200).json(crud)
})

//UPDATE
const putItem = asyncHandler(async (req, res) => {

    const crud = await Crud.findById(req.params.id)
    if(!crud){
        res.status(400)
        throw new Error('Item not found')
    }

    const updatedCrud = await Crud.findByIdAndUpdate(req.params.id, req.body, {new : true})

    res.status(200).json(updatedCrud)
})

//DELETE
const deleteItem = asyncHandler(async (req, res) => {

    const crud = await Crud.findById(req.params.id)
    if(!crud){
        res.status(400)
        throw new Error('Item not found')
    }

    await crud.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getItems,
    postItem,
    putItem,
    deleteItem
}