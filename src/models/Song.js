const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Song = sequelize.define('son', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },

    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = Song;