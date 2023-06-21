const vehicleId = document.querySelector('[data-vehicle-id]').getAttribute('data-vehicle-id');
const usernameInput = document.getElementById('username-input');

// Retrieve reviews and display them on page load
window.addEventListener('load', async () => {
  try {
    const response = await fetch('/reviews');
    const reviews = await response.json();
    
    const filteredReviews = reviews.filter(review => review.vehicle_id === parseInt(vehicleId));
    console.log("dndnfjsdnjfs000000000000000000000000000000000000000000000000");
    console.log(filteredReviews);
    // Display the filtered reviews on the page
    displayReviews(filteredReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
});

// Helper function to display the reviews on the page
function displayReviews(reviews) {
  // Access the DOM element where you want to display the reviews
  const reviewsContainer = document.getElementById('reviewsContainer');
  const reviewText = reviewInput.value.trim();
  const username = usernameInput.value;

  // Clear the existing reviews from the container
  reviewsContainer.innerHTML = '';

  // Iterate over the reviews and create HTML elements to display them
  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500','border-b', 'border-gray-300');
    
    const reviewImageDiv = document.createElement('div');
    reviewImageDiv.classList.add('flex-none', 'py-10');
    
    const reviewImage = document.createElement('img');
    reviewImage.src = '/images/owlsmaincircle.png';
    reviewImage.alt = '';
    reviewImage.classList.add('h-10', 'w-10', 'rounded-full', 'bg-gray-100');
    
    reviewImageDiv.appendChild(reviewImage);
    reviewElement.appendChild(reviewImageDiv);
    
    const reviewContentDiv = document.createElement('div');
    reviewContentDiv.classList.add('py-10');
    
    const reviewAuthor = document.createElement('h3');
    reviewAuthor.classList.add('font-medium', 'text-gray-900');
    reviewAuthor.textContent = review.r_user;
    
    const reviewDate = document.createElement('p');
    const currentDate = new Date().toISOString().split('T')[0];
    reviewDate.innerHTML = `<time datetime="${currentDate}">${currentDate}</time>`;
    
    const rating = document.createElement('div');
    rating.classList.add('mt-4', 'flex', 'items-center');
    rating.textContent = '5 of 5';
    

    const reviewTextElement = document.createElement('div');
    reviewTextElement.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    const reviewText = document.createElement('p');
    reviewText.textContent = review.review;
    
    reviewTextElement.appendChild(reviewText);
    reviewContentDiv.appendChild(reviewAuthor);
    reviewContentDiv.appendChild(reviewDate);
    reviewContentDiv.appendChild(rating);
    reviewContentDiv.appendChild(reviewTextElement);
    
    reviewElement.appendChild(reviewContentDiv);
    reviewsContainer.prepend(reviewElement);
  });
}

// Add event listener to the review form
const reviewForm = document.getElementById('review-form');
const reviewInput = document.getElementById('review-input');
const reviewsContainer = document.getElementById('reviewsContainer');

reviewForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const reviewText = reviewInput.value.trim();
  const username = usernameInput.value;

  if (reviewText !== '') {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-b', 'border-gray-300');

    const reviewImageDiv = document.createElement('div');
    reviewImageDiv.classList.add('flex-none', 'py-10');

    const reviewImage = document.createElement('img');
    reviewImage.src = '/images/owlsmaincircle.png';
    reviewImage.alt = '';
    reviewImage.classList.add('h-10', 'w-10', 'rounded-full', 'bg-gray-100');

    reviewImageDiv.appendChild(reviewImage);
    reviewElement.appendChild(reviewImageDiv);

    const reviewContentDiv = document.createElement('div');
    reviewContentDiv.classList.add('py-10');

    const reviewAuthor = document.createElement('h3');
    reviewAuthor.classList.add('font-medium', 'text-gray-900');
    reviewAuthor.textContent = username;

    const rating = document.createElement('div');
    rating.classList.add('mt-4', 'flex', 'items-center');
    rating.textContent = '{{> 5star}}';
    const reviewTextElement = document.createElement('div');
    reviewTextElement.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    const reviewParagraph = document.createElement('p');
    reviewParagraph.textContent = reviewText;

    reviewTextElement.appendChild(reviewParagraph);
    reviewContentDiv.appendChild(reviewAuthor);
    reviewContentDiv.appendChild(rating);
    reviewContentDiv.appendChild(reviewTextElement);
    reviewElement.appendChild(reviewContentDiv);

    // Prepend the review element to the reviews container
    reviewsContainer.prepend(reviewElement);

    reviewInput.value = ''; // Clear the input field
  }

  console.log("THIS IS IN THE SUBMIT JS@@@@@@@@")
  console.log(vehicleId)
  const reviewData = {
    review: reviewText,
    vehicle_id: vehicleId, // Replace with the appropriate vehicle ID
    r_user: username // Replace with the appropriate user ID
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





//ORIGINAL CODE
// const reviewForm = document.getElementById('review-form');
// const reviewInput = document.getElementById('review-input');
// const reviewsContainer = document.getElementById('reviewsContainer');

// reviewForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const reviewText = reviewInput.value.trim();

//   if (reviewText !== '') {
//     const reviewElement = document.createElement('p');
//     reviewElement.textContent = reviewText;
//     reviewsContainer.appendChild(reviewElement);

//     reviewInput.value = ''; // Clear the input field
//   }
  
//   const reviewData = {
//     review: reviewText,
//     vehicle_id: 1, // Replace with the appropriate vehicle ID
//     r_user: 1 // Replace with the appropriate user ID
//   };

//   if (!reviewData.review) {
//     alert('Please enter a review');
//     return;
//   }

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(reviewData)
//   };

//   fetch('/reviews', requestOptions)
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response data if needed
//       console.log(data);
//     })
//     .catch(error => {
//       // Handle any errors that occur during the request
//       console.error('Error:', error);
//     });
// });









// const reviewForm = document.getElementById('review-form');
// const reviewInput = document.getElementById('review-input');

// reviewForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const reviewData = {
//     review: reviewInput.value.trim(),
//     vehicle_id: 1, // Replace with the appropriate vehicle ID
//     r_user: 1 // Replace with the appropriate user ID
//   };

//   if (!reviewData.review) {
//     alert('Please enter a review');
//     return;
//   }

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(reviewData)
//   };

//   fetch('/reviews', requestOptions)
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response data if needed
//       console.log(data);
//     })
//     .catch(error => {
//       // Handle any errors that occur during the request
//       console.error('Error:', error);
//     });
// });


// const reviewForm = document.getElementById('review-form');
// const reviewInput = document.getElementById('review-input');

// reviewForm.addEventListener('submit', (event) => {
//   if (reviewInput.value.trim() === '') {
//     event.preventDefault();
//     alert('Please enter a review');
//   } else {
//     // Update the form's action attribute to the correct route
//     reviewForm.action = '/reviews';
//     console.log('Form action:', reviewForm.action);
//   }
// });

// const reviewForm = document.getElementById('review-form');
// const reviewInput = document.getElementById('review-input');

// reviewForm.addEventListener('submit', (event) => {
//   if (reviewInput.value.trim() === '') {
//     event.preventDefault();
//     alert('Please enter a review');
//   }
// });
