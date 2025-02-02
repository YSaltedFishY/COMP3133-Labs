const mongoose = require('mongoose')
const Counter = require('./Counter')

const RestaurantSchema = new mongoose.Schema({
    resturant_id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        require: [true, 'Restaurant name is required'],
        trim: true,
        lowercase: true
    },
    cuisine: {
        type: String,
        required: [true, 'cuisine type is required'],
        enum: [
            'Japanese', 'Bakery', 'Italian', 'American', 'Chinese', 'BBQ', 'Breakfast',
            'Asian', 'Brazilian', 'British', 'Cajun', 'Caribbean', 'Coffee', 'Cuban',
            'Delicateseen', 'Dessert', 'French', 'Filipino', 'Vietnamese', 'Greman',
            'Greek', 'Indian', 'Irish', 'Halal', 'Indonesian', 'Indian', 'Korean',
            'Pizza', 'Seafood', 'Delicatessen','Other'
        ]
    },
    city: {
        type: String,
        required: [true, 'City name is required'],
        trim: true,
    },
})

RestaurantSchema.statics.getCuisine = function (cui) {
    return this.find({ cuisine: cui })
}

RestaurantSchema.statics.ExcludeBrooklyn = function (cui) {
    return this.find({ cuisine: cui , city: {$ne: "Brooklyn"}})
}


RestaurantSchema.query.asc = function () {
    return this.sort({ resturant_id: 1 })
}

RestaurantSchema.query.desc = function () {
    return this.sort({ resturant_id: -1 })
}

RestaurantSchema.pre('save', async function(next){
    if(!this.resturant_id){
        const counter = await Counter.findOneAndUpdate(
            {name: 'restaurant_id'},
            {$inc: {count_num:1}},
            {new: true, upsert: true}
        )

        console.log(`current ID counter is ${counter.count_num}`)

        this.resturant_id = counter.count_num

    }
    next();
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant