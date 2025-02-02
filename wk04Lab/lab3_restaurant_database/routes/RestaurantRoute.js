const express = require('express')
const restaurantModel = require('../models/Restaurant');
const Restaurant = require('../models/Restaurant');
const app = express();

app.get('/', async (req, res) => {
    try {
        let query = restaurantModel.find({})

        if (req.query.sortBy === "ASC") {
            query = query.asc();
        } else if (req.query.sortBy === "DESC") {
            query = query.desc();
        } else {
            // console.log("not sorted");
        }

        // console.log("sorted query")
        const restaurants = await query;

        res.status(200).send(restaurants)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get('/:cuisine', async (req, res) => {
    const cui = req.params.cuisine;

    try {
        let restaurants;

        if (cui === 'Delicatessen') {
            restaurants = await restaurantModel.ExcludeBrooklyn(cui);
            console.log(`Excluding Brooklyn for cuisine: ${cui}`);
        } else {
            restaurants = await restaurantModel.getCuisine(cui);
            console.log(`Getting cuisine: ${cui}`);
        }

        console.log(restaurants);

        if (restaurants && restaurants.length > 0) {
            res.send(restaurants);
        } else {
            res.status(404).json({ status: false, message: "No cuisine found" });
        }

    } catch (e) {
        console.error("Error fetching restaurants:", e);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});


app.delete('/deleteall', async (req, res) => {
    try {
        const all = await restaurantModel.deleteMany({})
        res.json({ message: `${all.deletedCount} restaurants has been deleted!` })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})


//Insert Multiple Records
// restaurantModel.create([
//     { name: "Sakura Sushi", cuisine: "Japanese", city: "New York" },
//     { name: "Tokyo Ramen House", cuisine: "Japanese", city: "Los Angeles" },
//     { name: "Parisian Delight", cuisine: "Bakery", city: "Chicago" },
//     { name: "Golden Croissant", cuisine: "Bakery", city: "San Francisco" },
//     { name: "Napoli Pizzeria", cuisine: "Italian", city: "New York" },
//     { name: "Little Italy Trattoria", cuisine: "Italian", city: "Boston" },
//     { name: "Fusion Bistro", cuisine: "Bakery", city: "Seattle" },
//     { name: "Mamma Mia's Kitchen", cuisine: "Bakery", city: "Miami" },
//     { name: "New York Deli", cuisine: "Delicatessen", city: "New York" },
//     { name: "Brooklyn Bagels & Deli", cuisine: "Delicatessen", city: "Brooklyn" },
//     { name: "Downtown Sandwich Corner", cuisine: "Delicatessen", city: "Chicago" },
//     { name: "Gourmet Delicatessen", cuisine: "Delicatessen", city: "San Francisco" },
// ])
module.exports = app