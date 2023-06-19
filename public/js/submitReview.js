  const reviewForm = document.getElementById('review-form');
  const reviewInput = document.getElementById('review-input');

  reviewForm.addEventListener('submit', (event) => {
    if (reviewInput.value.trim() === '') {
      event.preventDefault();
      alert('Please enter a review');
    }
  });
