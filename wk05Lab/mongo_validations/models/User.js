const mongoose = require('mongoose');

const emailRegEx = /^\S+@\S+\.\S+$/
const cityRegEx = /^[a-zA-Z\s]+$/
const zipRegEx = /^\d{5}-\d{4}$/
const webRegEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const phoneRegEx = /^1-\d{3}-\d{3}-\d{4}$/

//Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [4, "Username must be at least 4 characters"],
        maxLength: [20, "Username cannot be more than 20 characters"],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        match: [emailRegEx, 'Email format is invalid']
    },
    address: {
        street: {
            type: String,
            required: [true, 'street is required']
        },
        suite: {
            type: String,
            required: [true, 'suite is required']
        },
        city: {
            type: String,
            required: [true, 'city is required'],
            match: [cityRegEx, "City name can only have letters and space"]
        },
        zipcode: {
            type: String,
            required: [true, 'zip code is required'],
            match: [zipRegEx, "Postal code format is invalid"]
        },
        geo: {
            lat: {
                type: String,
                required: [true, 'lat is required']
            },
            lng: {
                type: String,
                required: [true, 'lng is required']
            }
        }
    },
    phone: {
        type: String,
        required: [true, 'phone is required'],
        match: [phoneRegEx, 'Phone number is invalid']
    },
    website: {
        type: String,
        required: [true, 'website is required'],
        match: [webRegEx, 'Website URL format is invalid']
    },
    company: {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        catchPhrase: {
            type: String,
            required: [true, 'catchPhrase is required']
        },
        bs: {
            type: String,
            required: [true, 'bs is required']
        }
    },
    createdAt: {
        type: Date,
        // default: Date.now
    },
    updatedAt: {
        type: Date,
        // default: Date.now
    },
});


UserSchema.pre('save', function (next) {
    console.log(`Pre-save - Trying to save user ${this.email}`)

    // this.createdAt = Date.now()
    // this.updatedAt = Date.now()

    User.findOne({ email: this.email }, (err, document) => {
        if (err) {
            console.log(`Error : ${JSON.stringify(err)}`)
        }


        if (document.length != 0) {
            //user with same email already exist. cannot create account.
            console.log(`user with email ${this.email} already exists. cannot create account.`)
            next(`user with email ${this.email} already exist. cannot create account`)
            // return false
        } else {
            console.log(`User with email ${this.email} doesn't exist`)
            this.createdAt = Date.now()
            this.updatedAt = Date.now()

            next()
        }
    })

})

const User = mongoose.model("User", UserSchema);
module.exports = User;