
const router = require('express').Router();
const Reviews = require('../../models/Reviews');

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Reviews.findAll();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new review
router.post('/', async (req, res) => {
  try {
    const { review, r_user, vehicle_id } = req.body;

    if (!review) {
      return res.status(400).json({ error: 'Review cannot be empty' });
    }

    if (!r_user || !vehicle_id) {
      return res.status(400).json({ error: 'Invalid r_user or vehicle_id' });
    }

    const newReview = await Reviews.create({
      review,
      r_user,
      vehicle_id
    });

    res.status(200).json(newReview);
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











// const router = require('express').Router();
// const Reviews = require('../../models/Reviews');

// // Retrieve all reviews
// router.get('/', async (req, res) => {
//   try {
//     // Fetch all reviews from the database using Sequelize
//     const reviews = await Reviews.findAll();

//     res.status(200).json(reviews);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE a new review
// router.post('/', async (req, res) => {
//   try {
//     // Retrieve the user input from the request body
//     const { review, r_user, vehicle_id } = req.body;

//     // Sanitize and validate the input (implement your own logic here)
//     // For example, you can check if the review is not empty and the r_user and vehicle_id exist

//     // Example validation: Check if the review is not empty
//     if (!review) {
//       return res.status(400).json({ error: 'Review cannot be empty' });
//     }

//     // Example validation: Check if the r_user and vehicle_id exist
//     if (!r_user || !vehicle_id) {
//       return res.status(400).json({ error: 'Invalid r_user or vehicle_id' });
//     }

//     // Make the POST request to your review database using Sequelize
//     const newReview = await Reviews.create({
//       review,
//       r_user,
//       vehicle_id
//     });

//     res.status(200).json(newReview);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// //ORIGINAL POST CODE 
// // const router = require('express').Router();
// // const Reviews = require('../../models/Reviews');

// // // CREATE a new review
// // router.post('/', async (req, res) => {
// //     try {
// //         // Retrieve the user input from the request body
// //         const { review, r_user, vehicle_id } = req.body;

// //         // Sanitize and validate the input (implement your own logic here)
// //         // For example, you can check if the review is not empty and the r_user and vehicle_id exist
        
// //         // Example validation: Check if the review is not empty
// //         if (!review) {
// //             return res.status(400).json({ error: 'Review cannot be empty' });
// //         }

// //         // Example validation: Check if the r_user and vehicle_id exist
// //         if (!r_user || !vehicle_id) {
// //             return res.status(400).json({ error: 'Invalid r_user or vehicle_id' });
// //         }

// //         // Make the POST request to your review database using Sequelize
// //         const newReview = await Reviews.create({
// //             review,
// //             r_user,
// //             vehicle_id
// //         });

// //         res.status(200).json(newReview);
// //     } catch (err) {
// //         res.status(500).json(err);
// //     }
// // });


// // GET all reviews
// router.get('/', async (req, res) => {
//     try {
//         const reviews = await Reviews.findAll();
//         res.status(200).json(reviews);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // GET a review by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const review = await Reviews.findByPk(req.params.id);
//         if (!review) {
//             res.status(404).json({ message: 'Review not found' });
//         } else {
//             res.status(200).json(review);
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // UPDATE a review
// router.put('/:id', async (req, res) => {
//     try {
//         const review = await Reviews.findByPk(req.params.id);
//         if (!review) {
//             res.status(404).json({ message: 'Review not found' });
//         } else {
//             await review.update(req.body);
//             res.status(200).json({ message: 'Review updated successfully' });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // DELETE a review
// router.delete('/:id', async (req, res) => {
//     try {
//         const review = await Reviews.findByPk(req.params.id);
//         if (!review) {
//             res.status(404).json({ message: 'Review not found' });
//         } else {
//             await review.destroy();
//             res.status(200).json({ message: 'Review deleted successfully' });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;
