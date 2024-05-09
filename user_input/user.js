// user.js

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
const governorates = [
    "Select A Destination",
    "Ad Daqahliyah (Dakahlia)",
    "Al Bahr al Ahmar (Red Sea)",
    "Al Buhayrah (Beheira)",
    "Al Fayyum (Fayoum)",
    "Al Gharbiyah (Gharbia)",
    "Al Iskandariyah (Alexandria)",
    "Al Isma'iliyah (Ismailia)",
    "Al Jizah (Giza)",
    "Al Minufiyah (Menufia)",
    "Al Minya (Minya)",
    "Al Qahirah (Cairo)",
    "Al Qalyubiyah (Qalyubia)",
    "Al Uqsur (Luxor)",
    "Al Wadi al Jadid (New Valley)",
    "As Suways (Suez)",
    "Ash Sharqiyah (Sharqia)",
    "Aswan",
    "Asyut",
    "Bani Suwayf (Beni Suef)",
    "Bur Sa'id (Port Said)",
    "Dumyat (Damietta)",
    "Janub Sina' (South Sinai)",
    "Kafr ash Shaykh (Kafr El Sheikh)",
    "Matruh",
    "Qina (Qena)",
    "Shamal Sina' (North Sinai)",
    "Suhaj (Sohag)"
];

$(document).ready(function () {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
        setProgressBar(++current);
    });

    $(".prev").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })
});

    function selectPackage(packageId) {
        alert("Package " + packageId + " selected!");
        // You can add further logic here based on the selected package
    }
    function populateGovernorates() {
        const selectElement = document.getElementById("governorates-list");
    
        // Add each governorate as an option in the dropdown list
        governorates.forEach(governorate => {
            const option = document.createElement("option");
            option.text = governorate;
            selectElement.add(option);
        });
    }
    window.addEventListener("DOMContentLoaded", () => {
        populateGovernorates(); // Populate governorates dropdown list
    
        const addDestinationButton = document.getElementById('add-destination');
    
        // ... (other code remains the same)

// ... (other code remains the same)

addDestinationButton.addEventListener('click', () => {
    // Clone the select element for governorates
    const selectElement = document.getElementById("governorates-list");
    const newSelectElement = selectElement.cloneNode(true);

    // Set the selectedIndex of the cloned select element to display the first option
    newSelectElement.selectedIndex = 0;

    // Create a new div to contain the select and remove button
    const newDestinationDiv = document.createElement('div');
    newDestinationDiv.classList.add('select');
    newDestinationDiv.appendChild(newSelectElement);
    newDestinationDiv.style.padding = '0.5rem';
    const removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.type = 'button';
    removeButton.style.marginLeft = '0.5rem';
    removeButton.style.fontSize = '1.5rem';
    removeButton.style.border='none';
    removeButton.style.backgroundColor='transparent';
    removeButton.addEventListener("mouseenter", function() {
        removeButton.style.backgroundColor = "#eb736354"; // Change background color on hover
    });
    removeButton.addEventListener("mouseleave", function() {
        removeButton.style.backgroundColor = "transparent"; // Restore original background color on mouse leave
    });

    removeButton.addEventListener('click', () => {
        newDestinationDiv.remove();
    });
    newDestinationDiv.appendChild(removeButton);

    // Get the first destination div
    const firstDestinationDiv = document.querySelector('.destination');

    // Insert the new destination div as the last child of the first destination div
    firstDestinationDiv.appendChild(newDestinationDiv);
});


// ... (other code remains the same)

// ... (other code remains the same)
    
        const travelForm = document.getElementById('travel-form');
    
        travelForm.addEventListener('submit', (event) => {
            // Prevent default form submission behavior
            event.preventDefault();
    
            // Get all destination inputs
            const destinations = document.querySelectorAll('.destination select');
    
            // Get other form data
            const numPeople = document.getElementById('num-people').value;
            const checkIn = document.getElementById('check-in').value;
            const checkOut = document.getElementById('check-out').value;
            const budget = document.getElementById('budget').value;
    
            // Function to calculate estimated budget based on daily rate and trip duration
            function calculateBudget(dailyRate, numPeople, checkIn, checkOut) {
                const checkInDate = new Date(checkIn);
                const checkOutDate = new Date(checkOut);
                const days = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
                // Assuming a base cost per person (adjust as needed)
                const baseCostPerPerson = 50;
                // Calculate total estimated budget
                const estimatedBudget = (dailyRate + baseCostPerPerson) * numPeople * days;
    
                return estimatedBudget;
            }
    
            // Function to display budget options based on user input
            function displayBudgetOptions(estimatedBudget) {
                // Define budget tiers (adjust ranges and labels as needed)
                const budgetTiers = [
                    { label: "Budget-Friendly (Up to $1000)", max: 1000 },
                    { label: "Moderate ($1000 - $2000)", min: 1000, max: 2000 },
                    { label: "Comfortable ($2000 - $3000)", min: 2000, max: 3000 },
                    { label: "Luxury ($3000+)" }
                ];
    
                // Validate data (optional, add checks for empty fields or invalid dates)
    
                // Display or submit the data (e.g., display a summary or submit to a server)
                const summary = `Travel Details:\n`;
                summary += `Destinations: ${[...destinations].map(select => select.value).join(', ')}\n`;
                summary += `Number of People: ${numPeople}\n`;
                summary += `Check-In Date: ${checkIn}\n`;
                summary += `Check-Out Date: ${checkOut}\n`;
                summary += `Available Budget: ${budget}`;
    
                console.log(summary); // For demonstration purposes, you can replace this with an alert or send the data to a server
    
                // Clear the form after successful submission (optional)
                travelForm.reset();
            }
            displayBudgetOptions();
        });
    });
    document.querySelector('.card-number-input').oninput = () =>{
        document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
      }
      
      document.querySelector('.card-holder-input').oninput = () =>{
        document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
      }
      
      document.querySelector('.month-input').oninput = () =>{
        document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
      }
      
      document.querySelector('.year-input').oninput = () =>{
        document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
      }
      
      document.querySelector('.cvv-input').onmouseenter = () =>{
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
      }
      
      document.querySelector('.cvv-input').onmouseleave = () =>{
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
      }
      
      document.querySelector('.cvv-input').oninput = () =>{
        document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
      }