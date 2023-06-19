const router = require('express').Router();
const Reviews = require('../../models/Reviews');

// CREATE a new review
router.post('/', async (req, res) => {
    try {
        // Retrieve the user input from the request body
        const { review, following_user_id, vehicle_id } = req.body;

        // Sanitize and validate the input (implement your own logic here)
        // For example, you can check if the review is not empty and the following_user_id and vehicle_id exist
        
        // Example validation: Check if the review is not empty
        if (!review) {
            return res.status(400).json({ error: 'Review cannot be empty' });
        }

        // Example validation: Check if the following_user_id and vehicle_id exist
        if (!following_user_id || !vehicle_id) {
            return res.status(400).json({ error: 'Invalid following_user_id or vehicle_id' });
        }

        // Make the POST request to your review database using Sequelize
        const newReview = await Reviews.create({
            review,
            following_user_id,
            vehicle_id
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(500).json(err);
    }
});








// // CREATE a new review
// router.post('/', async (req, res) => {
//     try {
//         // Retrieve the user input from the request body
//         const { comment, following_user_id, vehicle_id } = req.body;

//         // Sanitize and validate the input (implement your own logic here)
//         // For example, you can check if the review is not empty and the following_user_id and vehicle_id exist
        
//         // Example validation: Check if the review is not empty
//         if (!review) {
//             return res.status(400).json({ error: 'Review cannot be empty' });
//         }

//         // Example validation: Check if the following_user_id and vehicle_id exist
//         if (!following_user_id || !vehicle_id) {
//             return res.status(400).json({ error: 'Invalid following_user_id or vehicle_id' });
//         }

//         // Make the POST request to your review database using Sequelize
//         const newReview = await Reviews.create({
//             comment,
//             following_user_id,
//             vehicle_id
//         });

//         res.status(200).json(newReview);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });




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
