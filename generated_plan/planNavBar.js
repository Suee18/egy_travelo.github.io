document.addEventListener('DOMContentLoaded', function () {
    //path if inside a folder 
    function getNavbarPath() {

        return '/generated_plan/planNavBar.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('planNavBar_call').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});
