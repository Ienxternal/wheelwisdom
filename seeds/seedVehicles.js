const { Vehicle } = require('../models');

const vehicleData = [
    {
        year: 2020,
        make: 'Toyota',
        model: 'Camry',
        bodyType: 'Sedan',
    },
    {
        year: 2019,
        make: 'Honda',
        model: 'Civic',
        bodyType: 'Sedan',
    },
    {
        year: 2021,
        make: 'Tesla',
        model: 'Model 3',
        bodyType: 'Sedan',
    },
    {
        year: 2022,
        make: 'Ford',
        model: 'F-150',
        bodyType: 'Truck',
    },
    {
        year: 2022,
        make: 'Subaru',
        model: 'Forester',
        bodyType: 'SUV',
    },
];

const seedVehicles = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicles;
