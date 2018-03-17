const express = require('express');
const app = express();
const formidable = require('express-formidable');

const PORT = process.env.PORT || 3000;


const cloudinary = require('cloudinary').v2;
const fs = require('fs-extra');
const cors = require('cors');

const rutas = require('./rutas');

app.use(formidable({
  encoding: 'utf-8',
  uploadDir: '/storage',
  multiples: true, // req.files to be arrays of files 
}));
//  Connect all our routes to our application
app.use('/', rutas);

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});



app.use(cors({
  exposedHeaders: "*"
}));

app.get('/home', (req, res, next)=> {
  res.send({text: 'exito'});
});



app.listen(PORT, ()=>{
  console.log(`Àpp corriendo en el puerto: ${PORT}`);
});

