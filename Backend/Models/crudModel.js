const mongoose = require("mongoose")

const crudSchema = mongoose.Schema(
    {

        // name : String,
        // job : String,
        // age : Number,

        name : {
            type: String,
            required: [true, 'Enter you name']
        },
        job : {
            type: String,
            required: [true, 'Enter you job']
        },
        age : {
            type: Number,
            required: [true, 'Enter you age']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('CRUD', crudSchema)