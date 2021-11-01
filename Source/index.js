//Statements 

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const php = require('php');
const mysql = require('mysql');
const myConnection = require('express-myconnection');




//Settings
app.set('port', process.env.PORT || 5000);
let port = app.get('port');
app.engine('html', require('ejs').renderFile);
app.engine('php', php.__express);
app.set('view engine', 'ejs');
app.set('view engine', 'php')
app.set('views', path.join(__dirname, 'Views'));
app.set('views', path.join(__dirname, 'Views'));






//Middlewhere

app.use(morgan('dev'));
//Entiende los json que llegan del navegador
app.use(express.json());
//entiende que recibe desde el navegador por url
app.use(express.urlencoded({ extended: false }));

//Statci Files
//carpeta con archivos staticos que el navegador puede acceder
app.use(express.static(path.join(__dirname, 'public')));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'itwebser_cenix'
}, 'single'));

//Routes
app.use(require('./Routes/index'));






//Listening 
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto", port);
});