// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});

module.exports = sequelize;
