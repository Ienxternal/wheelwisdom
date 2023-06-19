const reviewForm = document.getElementById('review-form');
const reviewInput = document.getElementById('review-input');

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const reviewData = {
    review: reviewInput.value.trim(),
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
