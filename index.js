const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const core = require('cors');
var path = require('path');
const mongoose = require('mongoose');



// definition des parametres
const port = 3000;
mongoose 
 .connect('mongodb://localhost:27017/game', { useNewUrlParser : true })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


// importation des routes
const user = require('./src/routes/UserRouter');
const data = require('./src/routes/data');
const game = require('./src/routes/GameRouter');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(core());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


// definition des routes
app.use('/user', user);
app.use('/data', data);
app.use('/game', game);

app.listen(port, ()=>{
    console.log('Server started on ' + port + '...');
});