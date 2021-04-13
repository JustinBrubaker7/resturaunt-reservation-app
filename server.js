const express = require('express');
const path = require('path');


const app = express();
var PORT = process.env.PORT || 5050;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//post listening
app.listen(PORT, () => console.log(`app is running on ${PORT}`));


//api/reservation
//api/tables
//api/new