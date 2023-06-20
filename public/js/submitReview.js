

// WORKING CODE 6/20 accepts reviews ---
//Retrieve reviews for a specific vehicle and display them on page load
window.addEventListener('load', async () => {
  try {
    const vehicleId = 1; // Replace with the desired vehicle ID
    const response = await fetch(`/reviews?vehicle_id=${vehicleId}`);
    const reviews = await response.json();

    // Display the reviews on the page
    displayReviews(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
});

// Helper function to display the reviews on the page
function displayReviews(reviews) {
  // Access the DOM element where you want to display the reviews
  const reviewsContainer = document.getElementById('reviewsContainer');

  // Clear the existing reviews from the container
  reviewsContainer.innerHTML = '';

  // Iterate over the reviews and create HTML elements to display them
  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');

    const reviewText = document.createElement('p');
    reviewText.textContent = review.review;

    // Append the review text to the review element
    reviewElement.appendChild(reviewText);

    // Append the review element to the reviews container
    reviewsContainer.appendChild(reviewElement);
  });
}

// Add event listener to the review form
const reviewForm = document.getElementById('review-form');
const reviewInput = document.getElementById('review-input');
const reviewsContainer = document.getElementById('reviewsContainer');

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const reviewText = reviewInput.value.trim();

  if (reviewText !== '') {
    const reviewElement = document.createElement('p');
    reviewElement.textContent = reviewText;
    reviewsContainer.appendChild(reviewElement);

    reviewInput.value = ''; // Clear the input field
  }
  
  const reviewData = {
    review: reviewText,
    vehicle_id: 1, // Replace with the appropriate vehicle ID
    following_user_id: 1 // Replace with the appropriate user ID
  };

  if (!reviewData.review) {
    alert('Please enter a review');
    return;
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviewData)
  };

  fetch('/reviews', requestOptions)
    .then(response => response.json())
    .then(data => {
      // Handle the response data if needed
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });
});





