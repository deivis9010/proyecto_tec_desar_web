//Cargando el modulo dotenv para cargar variables de entorno
require('dotenv').config();
//Cargando el modulo de express
const express = require('express');
//Cargando el modulo de mongoose para la base de datos
const connectDB= require('./src/db_configs/db_connection.js');
//Instancia de express
const app = express(); 
//Rutas de la aplicacion
const gradeRoutes = require('./src/routes/grade.routes');
 //Puerto de la aplicacion establecido en el entorno o 3000 por defecto
 const port = process.env.PORT || 3000;
 console.log('🔍 URI de MongoDB desde .env:', process.env.MONGO_URI);
 // Conectar a la base de datos MongoDB
 connectDB(); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json()); 
//Rutas de la aplicacion
app.use("/api",gradeRoutes); 

//Url de inicio de la aplicacion
app.get('/api', (req, res) => {    
    res.send('API Tecnologias para el desarrollo web is running!');
})

