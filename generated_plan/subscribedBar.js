document.addEventListener('DOMContentLoaded', function() {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return  'subscribedBar.html';
    }
  
    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('subscribedaBar_call').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
  });