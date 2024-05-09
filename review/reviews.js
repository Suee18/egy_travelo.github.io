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




// nav bar

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const sideMenu = document.getElementById("side-menu");
  const menu = document.querySelector(".menu");
  const profile = document.querySelector(".profile");
  const sideMenuLinks = document.querySelectorAll('.side-menu-link');

  menuIcon.addEventListener("click", function() {
      sideMenu.classList.toggle("open");
      if (sideMenu.classList.contains("open")) {
          menu.style.marginLeft = "15rem";
          profile.style.display= "none";
      } else {
          menu.style.marginLeft = "0";
          profile.style.display="block";
      }
  });

  sideMenuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          // Remove 'active' class from all links
          sideMenuLinks.forEach(function(link) {
              link.classList.remove('active');
          });
          // Add 'active' class to the clicked link
          link.classList.add('active');
      });
  });
});
