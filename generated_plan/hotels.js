

document.addEventListener('DOMContentLoaded', function () {
    //path if inside a folder 
    function getNavbarPath() {
        return 'hotel.html';
    }

    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('hotelTable_call').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
});
