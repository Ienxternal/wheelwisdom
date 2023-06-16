const express = require('express');
const { Vehicles } = require('../../models');

const router = express.Router();

// Get all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicles.findAll();
        res.json(vehicles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get a single vehicle by ID
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicles.findByPk(req.params.id);
        if (!vehicle) {
            res.status(404).json({ message: 'Vehicle not found' });
        } else {
            res.json(vehicle);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create a new vehicle
router.post('/', async (req, res) => {
    try {
        const vehicle = await Vehicles.create(req.body);
        res.status(201).json(vehicle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update a vehicle
router.put('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicles.findByPk(req.params.id);
        if (!vehicle) {
            res.status(404).json({ message: 'Vehicle not found' });
        } else {
            await vehicle.update(req.body);
            res.json(vehicle);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Delete a vehicle
router.delete('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicles.findByPk(req.params.id);
        if (!vehicle) {
            res.status(404).json({ message: 'Vehicle not found' });
        } else {
            await vehicle.destroy();
            res.json({ message: 'Vehicle deleted' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
