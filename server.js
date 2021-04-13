const express = require('express');
const path = require('path');
var router = require('./router/api-router.js')



const app = express();
var PORT = process.env.PORT || 5050;


//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);


app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


app.listen(PORT, () => console.log(`app is running on ${PORT}`));


//api/reservation
//api/tables
//api/new