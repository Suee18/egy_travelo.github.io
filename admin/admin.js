let list = document.querySelectorAll(".naviation li");

function activeLink(){
    list.forEach(item =>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));
function Delete(deleteButton) {
    // Find the parent row of the delete button and store a reference
    const rowToDelete = deleteButton.closest("tr");
  
    // Check for errors (optional)
    if (!rowToDelete) {
      console.error("Error: Could not find parent row for delete button");
      return;
    }
  
    const paragraphContent = `<h2>Warning</h2><p>Do You Want To Delete This user</p>`;
  
    // Update the modal content
    const detailsContent = document.getElementById("details-container").querySelector(".details-content");
    detailsContent.innerHTML = paragraphContent; // Use innerHTML for proper formatting
  
    // Style the modal content (optional)
    const p = detailsContent.querySelector('p');
    const h2 = detailsContent.querySelector('h2');
    if (h2) {
      h2.style.color = 'red';
      h2.style.padding="0.5rem";
    }
    if (p) {
      p.style.fontSize='1rem';
      p.style.padding='0.5rem';
    }
  
    // Store a reference to the row to delete
    yesBtn.rowToDelete = rowToDelete;
  
    // Display the modal window
    document.getElementById("details-container").style.display = "block";
}

const yesBtn = document.getElementById("yes-btn");
yesBtn.addEventListener("click", () => {
    // Use the stored reference to the row to delete
    const rowToDelete = yesBtn.rowToDelete;
  
    // Remove the row from the table
    if (rowToDelete) {
      rowToDelete.remove();
      alert("User deleted!");
    } else {
      console.error("Error: Could not find row to delete after confirmation");
    }
  
    // Hide the modal window
    document.getElementById("details-container").style.display = "none";
});
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
    document.getElementById("details-container").style.display = "none";
});

// ================ Edit ================ //

const editButtons = document.querySelectorAll('#edit-btn');

function Edit(event) {
  // Your edit logic here
  console.log("Edit button clicked");
}

editButtons.forEach(button => {
  button.addEventListener('click', Edit);
});

// Function to handle edit button click
function handleEdit(event) {
  // Get the parent row of the clicked button
  const row = event.target.closest('tr');
  const rowData = Array.from(row.children).map((child) => child.textContent);
  
  // Extract data from the row
  const name = row.cells[1].textContent;
  const nationality = row.cells[2].textContent;
  const gender = row.cells[3].textContent;
  const subscription = row.cells[4].querySelector('span').textContent;

  // Populate the edit form with the extracted data
  document.getElementById('name').value = name;
  document.getElementById('nationality').value = nationality;
  document.getElementById('gender').value = gender;
  document.getElementById('subscription').value = subscription;

  // Show the edit form container
  document.getElementById('details-container2').style.display = 'block';

  // Prevent the default behavior of anchor tag
  event.preventDefault();
}

// Attach click event listener to each edit button
editButtons.forEach(button => {
  button.addEventListener('click', handleEdit);
});

// Function to handle close button click
document.getElementById('close-btn2').addEventListener('click', function() {
  // Hide the edit form container
  document.getElementById('details-container2').style.display = 'none';
});

// Function to handle form submission
document.getElementById('edit-form').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Here you can implement logic to save the edited data
  // For this example, let's just hide the edit form container
  document.getElementById('details-container2').style.display = 'none';
});


