const viewTablesBtn = document.getElementById('viewTablesButton');
const makeReservationBtn = document.getElementById('reservationButton');

const reservationList = document.getElementById('reservation-list');

function pageLoad(){

    reservationList.innerHTML = '';

    fetch(`/api/reservations`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        for(i = 0; i < data.length; i++){

            currentReservation = data[i];

            let newReserve = `
            <li>${currentReservation.id}</li>`;

            reservationList.appendChild(newReserve);

        }
    })
    .catch((error) => {
    console.error(error);
    });
}