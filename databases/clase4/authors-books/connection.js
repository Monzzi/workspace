const { Sequelize } = require('sequelize');

const database = 'postgres';
const username = 'postgres';
const password = 'changeme';
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres',
});

module.exports = {
  sequelize,
};

// este javascript es el mismo que hacer el comando psql -Upostgres nombre-database

