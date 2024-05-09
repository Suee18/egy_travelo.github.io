
document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return 'ticket.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ticket:', error);
        });
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return 'ticket2.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder2').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ticket:', error);
        });
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return 'ticket3.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder3').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ticket:', error);
        });
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return 'ticket4.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder4').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ticket:', error);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return 'ticket5.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder5').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ticket:', error);
        });
});
document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return 'ticket6.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder6').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ticket:', error);
        });
});
