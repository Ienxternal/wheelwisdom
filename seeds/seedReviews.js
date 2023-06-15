const { Review } = require('../models');

const reviewData = [
    { following_user_id: 1, reviewed_product_id: 1, review_content: 'Review1 of Car1 by User1' },
    { following_user_id: 1, reviewed_product_id: 2, review_content: 'Review2 of Car2 by User1' },
    { following_user_id: 1, reviewed_product_id: 3, review_content: 'Review3 of Car3 by User1' },
    { following_user_id: 2, reviewed_product_id: 1, review_content: 'Review1 of Car1 by User2' },
    { following_user_id: 2, reviewed_product_id: 2, review_content: 'Review2 of Car2 by User2' },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
