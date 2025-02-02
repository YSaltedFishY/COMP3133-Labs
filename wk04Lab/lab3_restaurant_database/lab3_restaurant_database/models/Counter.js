const mongoose = require('mongoose')

const CounterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A counter name is required'],
        unique: true,
    },
    count_num:{
        type: Number,
        default: 1,
    }
})

const Counter = mongoose.model('Counter', CounterSchema)
module.exports = Counter