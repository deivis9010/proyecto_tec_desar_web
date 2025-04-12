//Cargando el modulo dotenv para cargar variables de entorno
require('dotenv').config();
//Cargando el modulo de express
const express = require('express');
//Cargando el modulo de mongoose para la base de datos
const connectDB= require('./src/db_configs/db_connection.js');
//Instancia de express
const app = express(); 
 //Puerto de la aplicacion establecido en el entorno o 3000 por defecto
 const port = process.env.PORT || 3000;

 // Conectar a la base de datos MongoDB
 connectDB(); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {    
    res.send('API Tecnologias para el desarrollo web is running!');
})

