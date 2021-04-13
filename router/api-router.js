var express = require('express')
var router = express.Router()


const tables = []
// define the about route
router.get('/reservations', function (req, res) {
  res.send(tables)
})

router.post('/new', (req, res) => {
  const newReservation = req.body;
  console.log(newReservation);
  tables.push(newReservation);
  res.json(newReservation);
});






//   api/ this a new reservation
//   api/reservation this return all reservations

//name, phoneNumber , id, email, 

module.exports = router;