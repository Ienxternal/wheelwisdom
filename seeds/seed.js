const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { User, Vehicle, Review } = require('../models');

const seedAll = async () => {
    try {
        const userData = fs.readFileSync(path.join(__dirname, 'user.json'), 'utf8');
        let users = JSON.parse(userData);
        
        // hash the passwords
        users = users.map(user => {
            user.password = bcrypt.hashSync(user.password, 10);
            return user;
        });

        await User.bulkCreate(users);

        const vehicleData = fs.readFileSync(path.join(__dirname, 'vehicle.json'), 'utf8');
        const vehicles = JSON.parse(vehicleData);

        await Vehicle.bulkCreate(vehicles);

        const reviewData = fs.readFileSync(path.join(__dirname, 'reviews.json'), 'utf8');
        const reviews = JSON.parse(reviewData);

        await Review.bulkCreate(reviews);

        console.log('Database seeded!');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

seedAll()