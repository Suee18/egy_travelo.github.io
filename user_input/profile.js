

function editProfile() {
  // Enable editing for all fields
  document.getElementById('age').contentEditable = true;
  document.getElementById('gender').contentEditable = true;
  document.getElementById('nationality').contentEditable = true;
  document.getElementById('email').contentEditable = true;

  // Highlight elements with ID "info" in red
  var infoElements = document.querySelectorAll('#info');
  infoElements.forEach(function(element) {
    element.style.backgroundColor = 'rgba(255, 0, 0, 1)'; // Light red background
  });

  // Enable Save button after editing starts
  document.getElementById('btnSave').disabled = false;
}

function saveProfile() {
  // Get the edited values
  const newAge = document.getElementById('age').textContent;
  const newGender = document.getElementById('gender').textContent;
  const newNationality = document.getElementById('nationality').textContent;
  const newEmail = document.getElementById('email').textContent;

  // Simulate sending data to server (replace with your actual saving logic)
  console.log("Saving changes:");
  console.log("Age:", newAge);
  console.log("Gender:", newGender);
  console.log("Nationality:", newNationality);
  console.log("Email:", newEmail);

  // Disable editing after saving
  document.getElementById('age').contentEditable = false;
  document.getElementById('gender').contentEditable = false;
  document.getElementById('nationality').contentEditable = false;
  document.getElementById('email').contentEditable = false;

  // Remove highlight from elements with ID "info"
  var infoElements = document.querySelectorAll('#info');
  infoElements.forEach(function(element) {
    element.style.backgroundColor = ''; // Remove background color
  });

  // Disable Save button again
  document.getElementById('btnSave').disabled = true;
}


function selectAvatar(avatar) {
  // This function will be called when an avatar is selected
  // You can implement logic to display the selected avatar
  document.getElementById('avatar-display').innerHTML = '<img src="' + avatar + '" alt="Selected Avatar">';
}

function toggleDropdown() {
  // This function will toggle the visibility of the dropdown menu
  var dropdown = document.getElementById('avatar-dropdown');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}
