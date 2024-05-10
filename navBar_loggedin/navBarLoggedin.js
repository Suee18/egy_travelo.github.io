

document.addEventListener('DOMContentLoaded', function () {
    //path if inside a folder 
    function getNavbarPath() {
        return '/navBar_loggedin/navBarLoggedin.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('navBarLoggedIN_call').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});