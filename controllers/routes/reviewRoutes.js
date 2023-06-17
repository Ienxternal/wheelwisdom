const router = require('express').Router();
const { Reviews } = require('../../models');

// CREATE a new review
router.post('/', async (req, res) => {
    try {
        const review = await Reviews.create(req.body);
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Reviews.findAll();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a review by ID
router.get('/:id', async (req, res) => {
    try {
        const review = await Reviews.findByPk(req.params.id);
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
        } else {
            res.status(200).json(review);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE a review
router.put('/:id', async (req, res) => {
    try {
        const review = await Reviews.findByPk(req.params.id);
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
        } else {
            await review.update(req.body);
            res.status(200).json({ message: 'Review updated successfully' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a review
router.delete('/:id', async (req, res) => {
    try {
        const review = await Reviews.findByPk(req.params.id);
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
        } else {
            await review.destroy();
            res.status(200).json({ message: 'Review deleted successfully' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
