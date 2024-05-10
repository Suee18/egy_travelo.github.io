document.addEventListener('DOMContentLoaded', function () {
    //path if inside a folder 
    function getNavbarPath() {

        return '/navBar/navBar.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('navBar_call').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});
