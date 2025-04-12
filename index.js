//Cargando el modulo de express
const express = require('express');
//Instancia de express
const app = express(); 
 //Puerto de la aplicacion establecido en el entorno o 3000 por defecto
 const port = process.env.PORT || 3000;

 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {    
    res.send('API Tecnologias para el desarrollo web is running!');
})

