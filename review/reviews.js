const addReviewButton = document.getElementById('add-review-button');

addReviewButton.addEventListener('click', () => {
  // Create a new div element for the review
  const newReview = document.createElement('div');
  newReview.className = 'box';

  // Add the review content to the new div element
  newReview.innerHTML = `
    <div class="box-top">
      <div class="profile">
        <div class="name-user">
          <strong>User Name</strong>
        </div>
      </div>
      <div class="review">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
    <div class="comment">
    <input type="text">
    </div>
  `;

  // Add the new review to the box-container div
  const boxContainer = document.querySelector('.box-container');
  boxContainer.appendChild(newReview);
});