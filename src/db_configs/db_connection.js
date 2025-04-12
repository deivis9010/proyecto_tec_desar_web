// File: src/db_configs/db_connection.js
const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1);
        });
};

// Exportar la función connectDB para usarla en otros archivos
module.exports = connectDB;