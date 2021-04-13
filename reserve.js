submitButton = document.getElementById('submit-reservation');

const tableName = document.getElementById('tableName');
const tableNumber = document.getElementById('tableNumber');
const tableEmail = document.getElementById('tableEmail');
const tableId = document.getElementById('tableId');

function submitReservation(){

    let name = tableName.innerHTML;
    let number = tableNumber.innerHTML;
    let email = tableEmail.innerHTML;
    let id = tableId.innerHTML;

    let savedReserve = {

        name: name,
        number: number,
        email: email,
        id: id

    }

    fetch('/api/new', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedReserve),
    })
    .then(response => response.json())
    .then(savedReserve => {

        console.log('Success:', savedReserve);

    })
    .catch((error) => {

        console.error('Error:', error);

    });
}
