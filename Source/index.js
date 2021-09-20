//Statements 

const express = require('express');
const app= express();
const path = require('path');
const morgan =require('morgan');


//Settings
app.set('port',process.env.PORT ||5000);
let port = app.get('port');
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));



//Middlewhere

app.use(morgan('dev'));
//Entiende los json que llegan del navegador
app.use(express.json());
//entiende que recibe desde el navegador por url
app.use(express.urlencoded({extended:false}));

//Statci Files
//carpeta con archivos staticos que el navegador puede acceder
app.use(express.static(path.join(__dirname,'public')));



//Routes
app.use(require('./Routes/index'));






//Listening 
app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto", port);
});