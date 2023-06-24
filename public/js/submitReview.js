const vehicleId = document.querySelector('[data-vehicle-id]').getAttribute('data-vehicle-id');
const usernameInput = document.getElementById('username-input');

// Retrieve reviews and display them on page load
window.addEventListener('load', async () => {
  try {
    const response = await fetch('/reviews');
    const reviews = await response.json();
    
    const filteredReviews = reviews.filter(review => review.vehicle_id === parseInt(vehicleId));
    // Display the filtered reviews on the page
    displayReviews(filteredReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
});

//Creates content for reviews on page loading
function displayReviews(reviews) {
  const reviewsContainer = document.getElementById('reviewsContainer');

  reviewsContainer.innerHTML = '';
// For each review apply div container and elements to make it look cohesive
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
    const starRatingContainer = document.createElement('div');
starRatingContainer.classList.add('flex', 'items-center');

const starSvg = '<svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">' +
  '<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />' +
  '</svg>';

for (let i = 0; i < 5; i++) {
  const starSvgElement = document.createElement('svg');
  starSvgElement.classList.add('text-yellow-400', 'h-5', 'w-5', 'flex-shrink-0');
  starSvgElement.setAttribute('viewBox', '0 0 20 20');
  starSvgElement.setAttribute('fill', 'currentColor');
  starSvgElement.setAttribute('aria-hidden', 'true');
  starSvgElement.innerHTML = starSvg;

  starRatingContainer.appendChild(starSvgElement);
}

rating.appendChild(starRatingContainer);
    

    const reviewTextElement = document.createElement('div');
    reviewTextElement.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500', 'font-maven');
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

//Create link for submitting review form.

const reviewForm = document.getElementById('review-form');
const reviewInput = document.getElementById('review-input');
const reviewsContainer = document.getElementById('reviewsContainer');

reviewForm.addEventListener('submit', async (event) => {
  event.preventDefault();
// Creates a div container with the correct style when user submits the form
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
  
    const starRatingContainer = document.createElement('div');
starRatingContainer.classList.add('flex', 'items-center');

const starSvg = '<svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">' +
  '<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />' +
  '</svg>';

for (let i = 0; i < 5; i++) {
  const starSvgElement = document.createElement('svg');
  starSvgElement.classList.add('text-yellow-400', 'h-5', 'w-5', 'flex-shrink-0');
  starSvgElement.setAttribute('viewBox', '0 0 20 20');
  starSvgElement.setAttribute('fill', 'currentColor');
  starSvgElement.setAttribute('aria-hidden', 'true');
  starSvgElement.innerHTML = starSvg;

  starRatingContainer.appendChild(starSvgElement);
}
rating.appendChild(starRatingContainer);

    const reviewTextElement = document.createElement('div');
    reviewTextElement.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500', 'font-maven');
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
//Log review input into database.
  const reviewData = {
    review: reviewText,
    vehicle_id: vehicleId,
    r_user: username 
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
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
