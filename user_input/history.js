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
function showDetails1() {
  const paragraphContent = `
  <h2>Visited Places</h2>
  <ul><li>Egyptian museum</li> <li>Pyramids</li> <li> Citadel of Qaitbey</li> <li> Mall of Arabia</li><li> Abu Simbel Temple</li><li>Cinema</li></ul>
`;
// 2. Update the modal content with the fetched paragraph
const detailsContent = document.getElementById("details-container").querySelector(".details-content");
detailsContent.innerHTML = paragraphContent; // Use innerHTML for proper formatting
const h2 = detailsContent.querySelector('h2');
if (h2) { // Check if h2 exists before styling
  h2.style.color = '#c3e4db';
}
// 3. Display the modal window (make it visible)
document.getElementById("details-container").style.display = "block";

}
function showDetails2() {
  const paragraphContent = `
  <h2>Visited Places</h2>
  <ul><li>Abdeen palace</li></ul>
`;
// 2. Update the modal content with the fetched paragraph
const detailsContent = document.getElementById("details-container").querySelector(".details-content");
detailsContent.innerHTML = paragraphContent; // Use innerHTML for proper formatting
const h2 = detailsContent.querySelector('h2');
if (h2) { // Check if h2 exists before styling
  h2.style.color = '#c3e4db';
}
// 3. Display the modal window (make it visible)
document.getElementById("details-container").style.display = "block";

}
function showDetails3() {
  const paragraphContent = `
  <h2>Visited Places</h2>
  <ul><li>Alexandria Library</li> <li>Citedal of Qaitbey</li> <li>The Ware House Reastaurant</li> <li>El Alamein War Memorials</li></ul>
`;
// 2. Update the modal content with the fetched paragraph
const detailsContent = document.getElementById("details-container").querySelector(".details-content");
detailsContent.innerHTML = paragraphContent; // Use innerHTML for proper formatting
const h2 = detailsContent.querySelector('h2');
if (h2) { // Check if h2 exists before styling
  h2.style.color = '#c3e4db';
}
// 3. Display the modal window (make it visible)
document.getElementById("details-container").style.display = "block";

}
function showDetails4() {
  const paragraphContent = `
  <h2>Visited Places</h2>
  <ul><li>Egyptian museum</li> <li>White Dolphine Diving Center</li> <li>Dive the Sites of the Straits of Gubal</li> <li>Hurghada Museum</li></ul>
`;
// 2. Update the modal content with the fetched paragraph
const detailsContent = document.getElementById("details-container").querySelector(".details-content");
detailsContent.innerHTML = paragraphContent; // Use innerHTML for proper formatting
const h2 = detailsContent.querySelector('h2');
if (h2) { 
  h2.style.color = '#c3e4db';
}
document.getElementById("details-container").style.display = "block";

}
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  document.getElementById("details-container").style.display = "none";
});
